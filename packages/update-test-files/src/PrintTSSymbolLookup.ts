// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-tscodegen/minimum-flow-parser';

export interface SymbolLookup {
    decls: { [key: string]: flow.Declaration };
    t2iCandidates: { [key: string]: [boolean, flow.InterfaceDecl] };
    t2iSelected: string[];
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

export function generateLookup(program: flow.FlowProgram): SymbolLookup {
    const lookup: SymbolLookup = { decls: {}, t2iCandidates: {}, t2iSelected: [] };

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

    return lookup;
}