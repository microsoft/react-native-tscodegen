import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportCommandInfo, ExportComponentInfo } from './ExportParser';

function parseCommands(info: ExportCommandInfo): cs.CommandTypeShape[] {
    const typeChecker = info.program.getTypeChecker();
    const mappedType = typeChecker.getTypeFromTypeNode(info.typeNode);
    if (mappedType.flags !== ts.TypeFlags.Object || mappedType.symbol.members === undefined) {
        throw new Error(`${info.typeNode.getText()} is expected to be an interface type.`);
    }

    const commands: cs.CommandTypeShape[] = [];
    for (const commandName of info.supportedCommands) {
        const methodSymbol = mappedType.symbol.members.get(<ts.__String>commandName);
        if (methodSymbol === undefined) {
            throw new Error(`Unable to find command ${commandName} in type ${info.typeNode.getText()}.`);
        }

        let funcDecl: ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature;
        let funcType: ts.MethodSignature | ts.CallSignatureDeclaration | ts.FunctionTypeNode;

        if (methodSymbol.declarations.length === 1) {
            const decl = methodSymbol.declarations[0];
            if (ts.isMethodSignature(decl) || ts.isCallSignatureDeclaration(decl)) {
                funcDecl = decl;
                funcType = decl;
            } else if (ts.isPropertySignature(decl) && ts.isFunctionTypeNode(decl.type)) {
                funcDecl = decl;
                funcType = decl.type;
            }
        }
        if (funcDecl === undefined) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should be a function.`);
        }

        if (funcType.type === undefined || funcType.type.kind !== ts.SyntaxKind.VoidKeyword) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should return void.`);
        }
        if (funcType.typeParameters !== undefined && funcType.typeParameters.length !== 0) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
        }
        if (funcType.parameters.length === 0) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have at least one parameter.`);
        }

        const viewRefType = funcType.parameters[0].type;
        if (!ts.isTypeReferenceNode(viewRefType) || (
            viewRefType.typeName.getText() !== 'React.Ref' &&
            viewRefType.typeArguments !== undefined &&
            viewRefType.typeArguments.length === 1 &&
            ts.isStringLiteral(viewRefType.typeArguments[0])
        )) {
            throw new Error(`The first parameter in command ${commandName} in type ${info.typeNode.getText()} should be React.Ref<'NAME'>.`);
        }

        commands.push({
            name: commandName,
            optional: funcDecl.questionToken !== undefined,
            typeAnnotation: {
                type: 'FunctionTypeAnnotation',
                params: funcType.parameters.slice(1).map((param: ts.ParameterDeclaration): cs.CommandsFunctionTypeParamAnnotation => {
                    let typeAnnotation: cs.CommandsTypeAnnotation;

                    if (param.type.kind === ts.SyntaxKind.StringKeyword) {
                        typeAnnotation = { type: 'StringTypeAnnotation' };
                    } else if (param.type.kind === ts.SyntaxKind.BooleanKeyword) {
                        typeAnnotation = { type: 'BooleanTypeAnnotation' };
                    } else if (ts.isTypeReferenceNode(param.type) && ts.isIdentifier(param.type.typeName)) {
                        if (param.type.getText() === 'Int32') {
                            typeAnnotation = { type: 'Int32TypeAnnotation' };
                        }
                    }

                    if (typeAnnotation === undefined) {
                        throw new Error(`Parameter ${param.name.getText()} in command ${commandName} in type ${info.typeNode.getText()} should be either string, boolean or Int32.`);
                    }

                    return {
                        name: param.name.getText(),
                        typeAnnotation
                    };
                })
            }
        });
    }
    return commands;
}

export function processComponent(info: ExportComponentInfo, commandsInfo: ExportCommandInfo | undefined): cs.ComponentShape {
    const events: cs.EventTypeShape[] = [];
    const props: cs.PropTypeShape[] = [];
    let commands: cs.CommandTypeShape[] = [];
    if (commandsInfo !== undefined) {
        commands = parseCommands(commandsInfo);
    }

    return {
        extendsProps: [{ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' }],
        events,
        props,
        commands
    };
}
