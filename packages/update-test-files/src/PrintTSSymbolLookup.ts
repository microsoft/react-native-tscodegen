// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-tscodegen/minimum-flow-parser';
import { Declaration } from '@react-native-tscodegen/minimum-flow-parser';
import { LookupAddress } from 'dns';

export interface SymbolLookup {
    decls: { [key: string]: flow.Declaration };
    t2iCandidates: { [key: string]: [boolean, flow.InterfaceDecl] };
    t2iAllMembersReadonly: Set<string>;
    t2iSelected: Set<string>;
}

function tryConvertTypeAlias(stat: flow.TypeAliasDecl): [boolean, flow.InterfaceDecl] | undefined {
    let interfaceReadonly = false;
    let interfaceType: flow.ObjectType | undefined;

    if (stat.aliasedType.kind === 'ObjectType') {
        interfaceType = stat.aliasedType;
    } else if (stat.aliasedType.kind === 'DecoratedGenericType' && stat.aliasedType.name === '$ReadOnly') {
        if (stat.aliasedType.elementType.kind === 'ObjectType') {
            interfaceType = stat.aliasedType.elementType;
            interfaceReadonly = true;
        }
    }

    if (interfaceType === undefined) {
        return undefined;
    }

    return [interfaceReadonly, {
        kind: 'InterfaceDecl',
        hasExport: stat.hasExport,
        name: stat.name,
        generic: stat.generic,
        baseTypes: interfaceType.mixinTypes,
        interfaceType: {
            kind: 'ObjectType',
            isExact: interfaceType.isExact,
            mixinTypes: [],
            members: interfaceType.members.map((member: flow.ObjectMember) => {
                let cloned = Object.assign({}, member);
                cloned.isReadonly ||= interfaceReadonly;
                return cloned;
            })
        }
    }];
}

function checkBaseType(lookup: SymbolLookup, name: string, visited: Set<string> = new Set<string>()): boolean {
    if (visited.has(name)) {
        return true;
    }

    visited.add(name);
    const result = (() => {
        if (lookup.t2iCandidates[name] == undefined) {
            return false;
        }
        const [readonly, decl] = lookup.t2iCandidates[name];
        const baseTypeNames: string[] = [];

        for (const baseType of decl.baseTypes) {
            if (baseType.kind !== 'TypeReference') {
                return false;
            }
            if (baseType.typeArguments.length != 0) {
                return false;
            }
            if (typeof baseType.name !== 'string') {
                return false;
            }
            if (!checkBaseType(lookup, baseType.name, visited)) {
                return false;
            }
            baseTypeNames.push(baseType.name);
        }

        const allBaseTypesReadonly = baseTypeNames.filter((name: string) => !lookup.t2iAllMembersReadonly.has(name)).length == 0;
        const allMembersReadonly = decl.interfaceType.members.filter((member: flow.ObjectMember) => !member.isReadonly).length != 0;
        if (readonly && (!allBaseTypesReadonly || !allMembersReadonly)) {
            return false;
        }

        if (allBaseTypesReadonly && allMembersReadonly) {
            lookup.t2iAllMembersReadonly.add(name);
        }
        return true;
    })();
    visited.delete(name);
    return result;
}

export function generateLookup(program: flow.FlowProgram): SymbolLookup {
    const lookup: SymbolLookup = {
        decls: {},
        t2iCandidates: {},
        t2iAllMembersReadonly: new Set<string>(),
        t2iSelected: new Set<string>(),
    };

    for (const stat of program.statements) {
        switch (stat.kind) {
            case 'TypeAliasDecl': {
                lookup.decls[stat.name] = stat;
                let converted = tryConvertTypeAlias(stat);
                if (converted !== undefined) {
                    lookup.t2iCandidates[stat.name] = converted;
                }
                break;
            }
            case 'InterfaceDecl': {
                lookup.decls[stat.name] = stat;
                break;
            }
        }
    }

    for (const name in lookup.t2iCandidates) {
        if (checkBaseType(lookup, name)) {
            lookup.t2iSelected.add(name);
        }
    }

    return lookup;
}