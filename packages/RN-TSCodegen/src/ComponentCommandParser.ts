// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportCommandInfo, getMembersFromType, resolveType } from './ExportParser';
import { typeToRNRawType } from './TypeChecker';

function typeNodeToCommandsTypeAnnotation(typeNode: ts.TypeNode, sourceFile: ts.SourceFile): cs.CommandParamTypeAnnotation {
    const rawType = typeToRNRawType(typeNode, sourceFile, { allowObject: false });
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'rn:RootTag': return { type: 'ReservedTypeAnnotation', name: 'RootTag' };
        default:
    }
    throw new Error(`Component command argument type does not support ${typeNode.getText()}: ${JSON.stringify(rawType, undefined, 2)}.`);
}

export function parseCommands(info?: ExportCommandInfo): cs.NamedShape<cs.CommandTypeAnnotation>[] {
    if (info === undefined) {
        return [];
    }

    const validMembers = getMembersFromType(info.typeNode, info.sourceFile);
    if (validMembers === undefined) {
        throw new Error(`Type ${info.typeNode.getText()} to define commands should be a interface type defined in the same source file.`);
    }

    function getMember(name: string): ts.TypeElement | undefined {
        for (const member of <ts.TypeElement[]>validMembers) {
            if (member.name !== undefined && member.name.getText() === name) {
                return member;
            }
        }
        return undefined;
    }

    const commands: cs.NamedShape<cs.CommandTypeAnnotation>[] = [];
    for (const commandName of info.supportedCommands) {
        const decl = getMember(commandName);
        if (decl === undefined) {
            throw new Error(`Unable to find command ${commandName} in type ${info.typeNode.getText()}.`);
        }

        let funcDecl: ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature | ts.PropertyDeclaration | undefined;
        let funcReturnType: ts.TypeNode | undefined;
        let funcParameters: ReadonlyArray<ts.ParameterDeclaration> | undefined;

        if (ts.isMethodSignature(decl) || ts.isCallSignatureDeclaration(decl)) {
            if (decl.typeParameters !== undefined && decl.typeParameters.length !== 0) {
                throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
            }
            if (decl.type === undefined) {
                throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have a return type.`);
            }
            funcDecl = decl;
            funcReturnType = decl.type;
            funcParameters = decl.parameters;
        } else if (ts.isPropertySignature(decl) || ts.isPropertyDeclaration(decl)) {
            if (decl.type === undefined) {
                throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have a property type.`);
            }

            const propType = resolveType(decl.type, info.sourceFile);
            if (ts.isFunctionTypeNode(propType)) {
                if (propType.typeParameters !== undefined && propType.typeParameters.length !== 0) {
                    throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
                }
                funcDecl = decl;
                funcReturnType = propType.type;
                funcParameters = propType.parameters;
            }
        }

        if (funcDecl === undefined || funcReturnType === undefined || funcParameters === undefined) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should be a function.`);
        }

        if (resolveType(funcReturnType, info.sourceFile).kind !== ts.SyntaxKind.VoidKeyword) {
            console.log(funcReturnType.kind);
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should return void.`);
        }
        if (funcParameters.length === 0) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have at least one parameter.`);
        }

        const viewRefType = funcParameters[0].type;
        if (viewRefType === undefined || !ts.isTypeReferenceNode(viewRefType) || (
            viewRefType.typeName.getText() !== 'React.Ref' &&
            viewRefType.typeName.getText() !== 'React.ElementRef' &&
            (
                viewRefType.typeArguments === undefined ||
                viewRefType.typeArguments.length !== 1
            )
        )) {
            throw new Error(`The first parameter in command ${commandName} in type ${info.typeNode.getText()} should be React.Ref<'NAME'> or React.ElementRef<TYPE>.`);
        }

        commands.push({
            name: commandName,
            optional: funcDecl.questionToken !== undefined,
            typeAnnotation: {
                type: 'FunctionTypeAnnotation',
                returnTypeAnnotation: { type: 'VoidTypeAnnotation' },
                params: funcParameters.slice(1).map((param: ts.ParameterDeclaration): cs.NamedShape<cs.CommandParamTypeAnnotation> => {
                    if (param.type === undefined) {
                        throw new Error(`Parameter ${param.name.getText()} in command ${commandName} in type ${info.typeNode.getText()} should have a parameter type.`);
                    }
                    return {
                        name: param.name.getText(),
                        optional: false,
                        typeAnnotation: typeNodeToCommandsTypeAnnotation(param.type, info.sourceFile)
                    };
                })
            }
        });
    }
    return commands;
}
