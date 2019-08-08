import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportCommandInfo, ExportComponentInfo } from './ExportParser';

function parseCommands(info: ExportCommandInfo): cs.CommandTypeShape[] {
    const typeChecker = info.program.getTypeChecker();
    const mappedType = typeChecker.getTypeFromTypeNode(info.typeNode);
    if (mappedType.symbol.members === undefined) {
        throw new Error(`${info.typeNode.getText()} is expected to be an interface type.`);
    }

    const commands: cs.CommandTypeShape[] = [];
    for (const commandName of info.supportedCommands) {
        const methodSymbol = mappedType.getProperty(commandName);
        if (methodSymbol === undefined) {
            throw new Error(`Unable to find command ${commandName} in type ${info.typeNode.getText()}.`);
        }

        let funcDecl: ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature;
        let funcReturnType: ts.Type;
        let funcParameters: ReadonlyArray<ts.ParameterDeclaration>;

        if (methodSymbol.declarations.length === 1) {
            const decl = methodSymbol.declarations[0];
            if (ts.isMethodSignature(decl) || ts.isCallSignatureDeclaration(decl)) {
                if (decl.typeParameters !== undefined && decl.typeParameters.length !== 0) {
                    throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
                }
                funcDecl = decl;
                funcReturnType = typeChecker.getTypeFromTypeNode(decl.type);
                funcParameters = decl.parameters;
            } else if (ts.isPropertySignature(decl)) {
                const propType = typeChecker.getTypeFromTypeNode(decl.type);
                const signatures = propType.getCallSignatures();
                if (signatures !== undefined && signatures.length === 1) {
                    if (signatures[0].typeParameters !== undefined && signatures[0].typeParameters.length !== 0) {
                        throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
                    }
                    funcDecl = decl;
                    funcReturnType = signatures[0].getReturnType();
                    funcParameters = signatures[0].parameters.map((parameterSymbol: ts.Symbol) => {
                        if (parameterSymbol.declarations.length === 1 && ts.isParameter(parameterSymbol.declarations[0])) {
                            return <ts.ParameterDeclaration>parameterSymbol.declarations[0];
                        } else {
                            throw new Error(`Parameter ${parameterSymbol.name} in command ${commandName} in type ${info.typeNode.getText()} should be a parameter.`);
                        }
                    });
                }
            }
        }
        if (funcDecl === undefined) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should be a function.`);
        }

        if (funcReturnType === undefined || (funcReturnType.flags !== ts.TypeFlags.Undefined && funcReturnType.flags !== ts.TypeFlags.Void)) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should return void.`);
        }
        if (funcParameters.length === 0) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have at least one parameter.`);
        }

        const viewRefType = funcParameters[0].type;
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
                params: funcParameters.slice(1).map((param: ts.ParameterDeclaration): cs.CommandsFunctionTypeParamAnnotation => {
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
                        throw new Error(`Parameter ${param.name.getText()} in command ${commandName} in type ${info.typeNode.getText()} should be either string, boolean or Int32, instead of ${param.type.getText()}.`);
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
