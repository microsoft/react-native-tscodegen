// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-tscodegen/minimum-flow-parser';
import * as os from 'os';
import { generateLookup, SymbolLookup } from './PrintTSSymbolLookup';

export interface PrintTypeConfig {
    forTestCase: boolean;
    forScenario: 'CodegenSchema' | 'ModuleSuccess' | 'ComponentSuccess' | 'Others';
}

class Printer {
    private indentation: number = 0;
    private text: string = '';

    constructor(readonly typeConfig: PrintTypeConfig) {
    }

    public get config(): PrintTypeConfig {
        return this.typeConfig;
    }

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
        this.text += os.EOL;
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

function printUnionTypeWithHeader(printer: Printer, unionType: flow.UnionType): void {
    printer.pushIndent();
    for (const unionItem of unionType.elementTypes) {
        printer.writeLn();
        printer.writeIndent();
        printer.write('| ');
        printer.pushIndent();
        printType(printer, unionItem);
        printer.popIndent();
    }
    printer.popIndent();
}

function printFunctionType(printer: Printer, functionType: flow.FunctionType, interfaceMember: boolean): void {
    printer.write('(');
    for (let i = 0; i < functionType.parameters.length; i++) {
        if (i !== 0) {
            printer.write(', ');
        }
        printer.write(functionType.parameters[i].name);
        printer.write(functionType.parameters[i].optional ? '?: ' : ': ');
        printType(printer, functionType.parameters[i].parameterType);
    }
    if (interfaceMember) {
        printer.write('): ');
    } else {
        printer.write(') => ');
    }
    printType(printer, functionType.returnType);
}

function printObjectTypeWithoutMixins(printer: Printer, objectType: flow.ObjectType, forInterface: boolean, readonly: boolean): void {
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
                    printFunctionType(printer, member.propType, true);
                } else {
                    if (member.isReadonly || readonly) {
                        printer.write('readonly ');
                    }
                    printer.write(member.name);
                    if (member.isOptional) {
                        printer.write('?');
                    }
                    if (member.propType.kind === 'UnionType') {
                        printer.write(':');
                        printUnionTypeWithHeader(printer, member.propType);
                    } else {
                        printer.write(': ');
                        printType(printer, member.propType);
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
                printer.write(member.keyName ?? 'key');
                printer.write(': ');
                printType(printer, member.keyType);
                printer.write(']: ');
                printType(printer, member.valueType);
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

function printTypeArray(printer: Printer, types: flow.Type[], delimiter: string, braceOnFunction: boolean): void {
    for (let i = 0; i < types.length; i++) {
        if (i !== 0) {
            printer.write(delimiter);
        }
        if (braceOnFunction && types[i].kind === 'FunctionType') {
            printer.write('(');
        }
        printType(printer, types[i]);
        if (braceOnFunction && types[i].kind === 'FunctionType') {
            printer.write(')');
        }
    }
}

function printExpressionArray(printer: Printer, exprs: flow.Expression[], delimiter: string): void {
    for (let i = 0; i < exprs.length; i++) {
        if (i !== 0) {
            printer.write(delimiter);
        }
        printExpression(printer, exprs[i]);
    }
}

function printType(printer: Printer, flowType: flow.Type, readonly: boolean = false): void {
    switch (flowType.kind) {
        case 'PrimitiveType': {
            if (flowType.name === 'mixed') {
                printer.write('unknown');
            } else {
                printer.write(flowType.name);
            }
            break;
        }
        case 'LiteralType': {
            printer.write(flowType.text);
            break;
        }
        case 'OptionalType': {
            if (printer.config.forTestCase) {
                printer.write('(undefined | null | ');
            } else {
                printer.write('(undefined | ');
            }
            if (flowType.elementType.kind === 'FunctionType') {
                printer.write('(');
            }
            printType(printer, flowType.elementType);
            if (flowType.elementType.kind === 'FunctionType') {
                printer.write(')');
            }
            printer.write(')');
            break;
        }
        case 'ArrayType': {
            if (flowType.isReadonly) {
                if (printer.config.forTestCase) {
                    printer.write('ReadonlyArray<');
                    printType(printer, flowType.elementType);
                    printer.write('>');
                } else {
                    printer.write('readonly ');
                    printType(printer, flowType.elementType);
                    printer.write('[]');
                }
            } else {
                printType(printer, flowType.elementType);
                printer.write('[]');
            }
            break;
        }
        case 'TupleType': {
            printer.write('[');
            printTypeArray(printer, flowType.types, ', ', false);
            printer.write(']');
            break;
        }
        case 'ObjectType': {
            for (const mixinType of flowType.mixinTypes) {
                printType(printer, mixinType);
                printer.write(' & ');
            }
            printObjectTypeWithoutMixins(printer, flowType, false, readonly);
            break;
        }
        case 'DecoratedGenericType': {
            if (printer.config.forTestCase) {
                printer.write('Readonly<');
                printType(printer, flowType.elementType);
                printer.write('>');
            } else {
                printType(printer, flowType.elementType, true);
            }
            break;
        }
        case 'UnionType': {
            printTypeArray(printer, flowType.elementTypes, ' | ', true);
            break;
        }
        case 'TypeReference': {
            printEntity(printer, flowType.name);
            if (flowType.typeArguments.length > 0) {
                printer.write('<');
                printTypeArray(printer, flowType.typeArguments, ', ', false);
                printer.write('>');
            }
            break;
        }
        case 'FunctionType': {
            printFunctionType(printer, flowType, false);
            break;
        }
        case 'ParenType': {
            printer.write('(');
            printType(printer, flowType.elementType);
            printer.write(')');
            break;
        }
        default: throw new Error(`Unrecognized Flow type: ${(<flow.Type>flowType).kind}`);
    }
}

function printExpression(printer: Printer, expr: flow.Expression): void {
    switch (expr.kind) {
        case 'LiteralExpr': {
            printer.write(expr.text);
            break;
        }
        case 'ExprReference': {
            printEntity(printer, expr.name);
            if (expr.typeArguments.length > 0) {
                printer.write('<');
                printTypeArray(printer, expr.typeArguments, ', ', false);
                printer.write('>');
            }
            break;
        }
        case 'TypeCastExpr': {
            printExpression(printer, expr.expr);
            printer.write(' as ');
            printType(printer, expr.toType);
            break;
        }
        case 'CallExpr': {
            printExpression(printer, expr.expr);
            printer.write('(');
            printExpressionArray(printer, expr.funcArguments, ', ');
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
                printExpression(printer, prop.value);
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
            printExpressionArray(printer, expr.values, ', ');
            printer.write(']');
            break;
        }
        case 'ParenExpr': {
            printer.write('(');
            printExpression(printer, expr.expr);
            printer.write(')');
            break;
        }
        default: throw new Error(`Unrecognized Flow expression: ${(<flow.Expression>expr).kind}`);
    }
}

function printGenericHeader(printer: Printer, generic: undefined | flow.GenericHeader): void {
    if (generic !== undefined) {
        printer.write('<');
        for (let i = 0; i < generic.parameters.length; i++) {
            if (i !== 0) {
                printer.write(', ');
            }
            printer.write(generic.parameters[i].name);
            const baseType = generic.parameters[i].baseType;
            if (baseType !== undefined) {
                printer.write(' extends ');
                printType(printer, baseType);
            }
        }
        printer.write('>');
    }
}

function printStatement(printer: Printer, lookup: SymbolLookup, stat: flow.Statement, forceExport: boolean): void {
    switch (stat.kind) {
        case 'UseStrictStat': {
            printer.write(`'use strict';`); break;
        }
        case 'TypeAliasDecl': {
            if ((!printer.config.forTestCase || printer.config.forScenario === 'ComponentSuccess') && lookup.t2iSelected[stat.name] === true) {
                printStatement(printer, lookup, lookup.t2iCandidates[stat.name][1], forceExport);
                break;
            } else {
                if (forceExport || stat.hasExport) {
                    printer.write(`export `);
                }
                printer.write(`type ${stat.name}`);
                printGenericHeader(printer, stat.generic);
                printer.write(' =');
                if (stat.aliasedType.kind === 'UnionType') {
                    printUnionTypeWithHeader(printer, stat.aliasedType);
                    printer.write(';');
                } else {
                    printer.write(' ');
                    printType(printer, stat.aliasedType);
                    printer.write(';');
                }
            }
            break;
        }
        case 'InterfaceDecl': {
            if (forceExport || stat.hasExport) {
                printer.write(`export `);
            }
            printer.write(`interface ${stat.name}`);
            printGenericHeader(printer, stat.generic);

            if (stat.baseTypes.length > 0) {
                printer.write(' extends ');
                printTypeArray(printer, stat.baseTypes.concat(stat.interfaceType.mixinTypes), ', ', false);
            }

            printer.write(' ');
            printObjectTypeWithoutMixins(printer, stat.interfaceType, true, false);
            break;
        }
        case 'EnumDecl': {
            if (forceExport || stat.hasExport) {
                printer.write(`export `);
            }
            printer.write(`enum ${stat.name} {`);
            printer.writeLn();
            printer.pushIndent();
            for (const item of stat.members) {
                printer.writeIndent();
                printer.write(item.name);
                if (item.value !== undefined) {
                    printer.write(` = ${item.value.text}`);
                }
                printer.write(',');
                printer.writeLn();
            }
            printer.popIndent();
            printer.writeIndent();
            printer.write('}');
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
        case 'ImportSingleStat': {
            printer.write(`import ${stat.name} from ${stat.source};`);
            break;
        }
        case 'ImportNameStat': {
            printer.write(`import {${stat.names.join(', ')}} from ${stat.source};`);
            break;
        }
        case 'ExportEqualStat': {
            printer.write(`export const ${stat.name} = `);
            printExpression(printer, stat.expr);
            printer.write(';');
            break;
        }
        case 'ExportDefaultStat': {
            printer.write(`export default `);
            printExpression(printer, stat.expr);
            printer.write(';');
            break;
        }
        default: throw new Error(`Unrecognized Flow statement: ${(<flow.Statement>stat).kind}`);
    }
}

export function printTypeScript(program: flow.FlowProgram, forceExport: boolean, typeConfig: PrintTypeConfig): string {
    const printer = new Printer(typeConfig);
    const lookup = generateLookup(program);
    for (const stat of program.statements) {
        printStatement(printer, lookup, stat, forceExport);
        printer.writeLn();
        printer.writeLn();
    }
    return printer.toString();
}
