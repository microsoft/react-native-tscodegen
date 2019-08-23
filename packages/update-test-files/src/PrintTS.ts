import * as flow from 'minimum-flow-parser';

class Printer {
    private indentation: number = 0;
    private text: string = '';

    public pushIndent(): void {
        this.indentation++;
    }

    public popIndent(): void {
        this.indentation--;
    }

    public write(text: string): void {
        this.text += text;
    }

    public writeLn(): void {
        this.text += '\r\n';
    }

    public writeIndent(): void {
        for (let i = 0; i < this.indentation; i++) {
            this.write('  ');
        }
    }

    public toString(): string {
        return this.text;
    }
}

function printEntity(printer: Printer, entity: flow.EntityName): void {
    if (typeof entity === 'string') {
        printer.write(entity);
    } else {
        printEntity(printer, entity.parent);
        printer.write('.');
        printer.write(entity.name);
    }
}

interface PrintTypeConfig {
    useReactNull: boolean;
}

function printUnionTypeWithHeader(printer: Printer, unionType: flow.UnionType, config: PrintTypeConfig): void {
    printer.pushIndent();
    for (const unionItem of unionType.elementTypes) {
        printer.writeLn();
        printer.writeIndent();
        printer.write('| ');
        printer.pushIndent();
        printType(printer, unionItem, config);
        printer.popIndent();
    }
    printer.popIndent();
}

function printFunctionType(printer: Printer, functionType: flow.FunctionType, interfaceMember: boolean, config: PrintTypeConfig): void {
    printer.write('(');
    for (let i = 0; i < functionType.parameters.length; i++) {
        if (i !== 0) {
            printer.write(', ');
        }
        printer.write(`${functionType.parameters[i].name}: `);
        printType(printer, functionType.parameters[i].parameterType, config);
    }
    if (interfaceMember) {
        printer.write('): ');
    } else {
        printer.write(') => ');
    }
    printType(printer, functionType.returnType, config);
}

function printObjectTypeWithoutMixins(printer: Printer, objectType: flow.ObjectType, forInterface: boolean, config: PrintTypeConfig): void {
    printer.write('{');
    printer.writeLn();
    printer.pushIndent();
    for (const member of objectType.members) {
        switch (member.kind) {
            case 'Prop': {
                printer.writeIndent();
                if (forInterface && member.propType.kind === 'FunctionType') {
                    printer.write(member.name);
                    if (member.isOptional) {
                        printer.write('?');
                    }
                    printFunctionType(printer, member.propType, true, config);
                } else {
                    if (member.isReadonly) {
                        printer.write('readonly ');
                    }
                    printer.write(member.name);
                    if (member.isOptional) {
                        printer.write('?');
                    }
                    if (member.propType.kind === 'UnionType') {
                        printer.write(':');
                        printUnionTypeWithHeader(printer, member.propType, config);
                    } else {
                        printer.write(': ');
                        printType(printer, member.propType, config);
                    }
                }
                printer.write(';');
                printer.writeLn();
                break;
            }
            case 'Indexer': {
                printer.writeIndent();
                if (member.isReadonly) {
                    printer.write('readonly ');
                }
                printer.write('[');
                printer.write(member.keyName);
                printer.write(': ');
                printType(printer, member.keyType, config);
                printer.write(']: ');
                printType(printer, member.valueType, config);
                printer.write(';');
                printer.writeLn();
                break;
            }
            default: throw new Error(`Unrecognized Flow type: ${(<flow.ObjectMember>member).kind}`);
        }
    }
    printer.popIndent();
    printer.writeIndent();
    printer.write('}');
}

function printTypeArray(printer: Printer, types: flow.Type[], delimiter: string, config: PrintTypeConfig): void {
    for (let i = 0; i < types.length; i++) {
        if (i !== 0) {
            printer.write(delimiter);
        }
        printType(printer, types[i], config);
    }
}

function printExpressionArray(printer: Printer, exprs: flow.Expression[], delimiter: string, config: PrintTypeConfig): void {
    for (let i = 0; i < exprs.length; i++) {
        if (i !== 0) {
            printer.write(delimiter);
        }
        printExpression(printer, exprs[i], config);
    }
}

function printType(printer: Printer, flowType: flow.Type, config: PrintTypeConfig): void {
    switch (flowType.kind) {
        case 'PrimitiveType': {
            printer.write(flowType.name);
            break;
        }
        case 'LiteralType': {
            printer.write(flowType.text);
            break;
        }
        case 'OptionalType': {
            if (config.useReactNull) {
                printer.write('(ReactNull | ');
            } else {
                printer.write('(undefined | ');
            }
            printType(printer, flowType.elementType, config);
            printer.write(')');
            break;
        }
        case 'ArrayType': {
            if (flowType.isReadonly) {
                printer.write('ReadonlyArray<');
                printType(printer, flowType.elementType, config);
                printer.write('>');
            } else {
                printType(printer, flowType.elementType, config);
                printer.write('[]');
            }
            break;
        }
        case 'TupleType': {
            printer.write('[');
            printTypeArray(printer, flowType.types, ', ', config);
            printer.write(']');
            break;
        }
        case 'ObjectType': {
            for (const mixinType of flowType.mixinTypes) {
                printType(printer, mixinType, config);
                printer.write(' & ');
            }
            printObjectTypeWithoutMixins(printer, flowType, false, config);
            break;
        }
        case 'DecoratedGenericType': {
            printer.write('Readonly<');
            printType(printer, flowType.elementType, config);
            printer.write('>');
            break;
        }
        case 'UnionType': {
            printTypeArray(printer, flowType.elementTypes, ' | ', config);
            break;
        }
        case 'TypeReference': {
            printEntity(printer, flowType.name);
            if (flowType.typeArguments.length > 0) {
                printer.write('<');
                printTypeArray(printer, flowType.typeArguments, ', ', config);
                printer.write('>');
            }
            break;
        }
        case 'FunctionType': {
            printFunctionType(printer, flowType, false, config);
            break;
        }
        case 'ParenType': {
            printer.write('(');
            printType(printer, flowType.elementType, config);
            printer.write(')');
            break;
        }
        default: throw new Error(`Unrecognized Flow type: ${(<flow.Type>flowType).kind}`);
    }
}

function printExpression(printer: Printer, expr: flow.Expression, config: PrintTypeConfig): void {
    switch (expr.kind) {
        case 'LiteralExpr': {
            printer.write(expr.text);
            break;
        }
        case 'ExprReference': {
            printEntity(printer, expr.name);
            if (expr.typeArguments.length > 0) {
                printer.write('<');
                printTypeArray(printer, expr.typeArguments, ', ', config);
                printer.write('>');
            }
            break;
        }
        case 'TypeCastExpr': {
            printExpression(printer, expr.expr, config);
            printer.write(' as ');
            printType(printer, expr.toType, config);
            break;
        }
        case 'CallExpr': {
            printExpression(printer, expr.expr, config);
            printer.write('(');
            printExpressionArray(printer, expr.funcArguments, ', ', config);
            printer.write(')');
            break;
        }
        case 'ObjectLiteralExpr': {
            printer.write('{');
            printer.writeLn();
            printer.pushIndent();
            for (let i = 0; i < expr.properties.length; i++) {
                const prop = expr.properties[i];
                printer.writeIndent();
                printer.write(prop.key);
                printer.write(': ');
                printExpression(printer, prop.value, config);
                if (i < expr.properties.length - 1) {
                    printer.write(',');
                }
                printer.writeLn();
            }
            printer.popIndent();
            printer.writeIndent();
            printer.write('}');
            break;
        }
        case 'ArrayLiteralExpr': {
            printer.write('[');
            printExpressionArray(printer, expr.values, ', ', config);
            printer.write(']');
            break;
        }
        case 'ParenExpr': {
            printer.write('(');
            printExpression(printer, expr.expr, config);
            printer.write(')');
            break;
        }
        default: throw new Error(`Unrecognized Flow expression: ${(<flow.Expression>expr).kind}`);
    }
}

function printStatement(printer: Printer, stat: flow.Statement, forceExport: boolean, typeConfig: PrintTypeConfig): void {
    switch (stat.kind) {
        case 'UseStrictStat': {
            printer.write(`'use strict';`); break;
        }
        case 'TypeAliasDecl': {
            if (forceExport || stat.hasExport) {
                printer.write(`export `);
            }
            printer.write(`type ${stat.name} =`);
            if (stat.aliasedType.kind === 'UnionType') {
                printUnionTypeWithHeader(printer, stat.aliasedType, typeConfig);
                printer.write(';');
            } else {
                printer.write(' ');
                printType(printer, stat.aliasedType, typeConfig);
                printer.write(';');
            }
            break;
        }
        case 'InterfaceDecl': {
            if (forceExport || stat.hasExport) {
                printer.write(`export `);
            }
            printer.write(`interface ${stat.name}`);

            if (stat.baseTypes.length > 0) {
                printer.write(' extends ');
                printTypeArray(printer, stat.baseTypes.concat(stat.interfaceType.mixinTypes), ', ', typeConfig);
            }

            printer.write(' ');
            printObjectTypeWithoutMixins(printer, stat.interfaceType, true, typeConfig);
            break;
        }
        case 'ImportEqualStat': {
            printer.write(`import ${stat.name} = require(${stat.source});`);
            break;
        }
        case 'ImportAsStat': {
            printer.write(`import * as ${stat.name} from ${stat.source};`);
            break;
        }
        case 'ImportNameStat': {
            printer.write(`import {${stat.names.join(', ')}} from ${stat.source};`);
            break;
        }
        case 'ExportEqualStat': {
            printer.write(`export const ${stat.name} = `);
            printExpression(printer, stat.expr, typeConfig);
            printer.write(';');
            break;
        }
        case 'ExportDefaultStat': {
            printer.write(`export default `);
            printExpression(printer, stat.expr, typeConfig);
            printer.write(';');
            break;
        }
        default: throw new Error(`Unrecognized Flow statement: ${(<flow.Statement>stat).kind}`);
    }
}

export function printTypeScript(program: flow.FlowProgram, forceExport: boolean, typeConfig: PrintTypeConfig): string {
    const printer = new Printer();
    for (const stat of program.statements) {
        printStatement(printer, stat, forceExport, typeConfig);
        printer.writeLn();
        printer.writeLn();
    }
    return printer.toString();
}
