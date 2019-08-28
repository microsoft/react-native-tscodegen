import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportCommandInfo } from './ExportParser';
import { isVoid, typeToRNRawType } from './TypeChecker';

function typeNodeToCommandsTypeAnnotation(typeNode: ts.TypeNode, typeChecker: ts.TypeChecker): cs.CommandsTypeAnnotation {
    const rawType = typeToRNRawType(typeChecker.getTypeFromTypeNode(typeNode), typeChecker, false);
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        default:
    }
    throw new Error(`Component command argument type does not support ${typeNode.getText()}.`);
}

export function parseCommands(info: ExportCommandInfo): cs.CommandTypeShape[] {
    const typeChecker = info.program.getTypeChecker();
    const mappedType = typeChecker.getTypeFromTypeNode(info.typeNode);

    const commands: cs.CommandTypeShape[] = [];
    for (const commandName of info.supportedCommands) {
        const methodSymbol = mappedType.getProperty(commandName);
        if (methodSymbol === undefined) {
            throw new Error(`Unable to find command ${commandName} in type ${info.typeNode.getText()}.`);
        }

        let funcDecl: ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature | undefined;
        let funcReturnType: ts.Type | undefined;
        let funcParameters: ReadonlyArray<ts.ParameterDeclaration> | undefined;

        for (const decl of methodSymbol.declarations) {
            if (ts.isMethodSignature(decl) || ts.isCallSignatureDeclaration(decl)) {
                if (decl.typeParameters !== undefined && decl.typeParameters.length !== 0) {
                    throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
                }
                if (decl.type === undefined) {
                    throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have a return type.`);
                }
                funcDecl = decl;
                funcReturnType = typeChecker.getTypeFromTypeNode(decl.type);
                funcParameters = decl.parameters;
            } else if (ts.isPropertySignature(decl)) {
                if (decl.type === undefined) {
                    throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have a property type.`);
                }
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
        if (funcDecl === undefined || funcReturnType === undefined || funcParameters === undefined) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should be a function.`);
        }

        if (!isVoid(funcReturnType)) {
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
                params: funcParameters.slice(1).map((param: ts.ParameterDeclaration): cs.CommandsFunctionTypeParamAnnotation => {
                    if (param.type === undefined) {
                        throw new Error(`Parameter ${param.name.getText()} in command ${commandName} in type ${info.typeNode.getText()} should have a parameter type.`);
                    }
                    return {
                        name: param.name.getText(),
                        typeAnnotation: typeNodeToCommandsTypeAnnotation(param.type, typeChecker)
                    };
                })
            }
        });
    }
    return commands;
}
