// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-ts-codegen/minimum-flow-parser';

export interface SymbolLookup {
    decls: { [key: string]: flow.Declaration };
    t2iCandidates: { [key: string]: [boolean, flow.InterfaceDecl] };
    t2iSelected: { [key: string]: boolean };
    t2iAllMembersReadonly: Set<string>;
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
                const cloned = { ...member };
                cloned.isReadonly ||= interfaceReadonly;
                return cloned;
            })
        }
    }];
}

function checkBaseType(lookup: SymbolLookup, name: string, visited: Set<string> = new Set<string>()): boolean {
    if (lookup.t2iSelected[name] !== undefined) {
        return lookup.t2iSelected[name];
    }
    if (visited.has(name)) {
        return true;
    }

    visited.add(name);
    const result = ((): boolean => {
        if (lookup.t2iCandidates[name] === undefined) {
            return false;
        }
        const [readonly, decl] = lookup.t2iCandidates[name];
        const baseTypeNames: string[] = [];

        for (const baseType of decl.baseTypes) {
            if (baseType.kind !== 'TypeReference') {
                return false;
            }
            if (baseType.typeArguments.length !== 0) {
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

        const allBaseTypesReadonly = baseTypeNames.filter((memberName: string) => !lookup.t2iAllMembersReadonly.has(memberName)).length === 0;
        const allMembersReadonly = decl.interfaceType.members.filter((member: flow.ObjectMember) => !member.isReadonly).length === 0;
        if (readonly && (!allBaseTypesReadonly || !allMembersReadonly)) {
            return false;
        }

        if (allBaseTypesReadonly && allMembersReadonly) {
            lookup.t2iAllMembersReadonly.add(name);
        }
        return true;
    })();
    visited.delete(name);
    lookup.t2iSelected[name] = result;
    return result;
}

export function generateLookup(program: flow.FlowProgram): SymbolLookup {
    const lookup: SymbolLookup = {
        decls: {},
        t2iCandidates: {},
        t2iSelected: {
            ViewProps: true
        },
        t2iAllMembersReadonly: new Set<string>(['ViewProps'])
    };

    for (const stat of program.statements) {
        switch (stat.kind) {
            case 'TypeAliasDecl': {
                lookup.decls[stat.name] = stat;
                const converted = tryConvertTypeAlias(stat);
                if (converted !== undefined) {
                    lookup.t2iCandidates[stat.name] = converted;
                }
                break;
            }
            case 'InterfaceDecl': {
                lookup.decls[stat.name] = stat;
                break;
            }
            default:
        }
    }

    for (const name of Object.keys(lookup.t2iCandidates)) {
        checkBaseType(lookup, name);
    }

    return lookup;
}
