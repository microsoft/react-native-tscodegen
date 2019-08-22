import * as flow from 'minimum-flow-parser';

function fixExpression(expr: flow.Expression): void {
    switch (expr.kind) {
        case 'LiteralExpr': {
            break;
        }
        case 'ExprReference': {
            if (expr.name === 'codegenNativeComponent' && expr.typeArguments.length === 2) {
                expr.typeArguments.pop();
            }
            break;
        }
        case 'TypeCastExpr': {
            fixExpression(expr.expr);
            break;
        }
        case 'CallExpr': {
            fixExpression(expr.expr);
            for (const arg of expr.funcArguments) {
                fixExpression(arg);
            }
            break;
        }
        case 'ObjectLiteralExpr': {
            for (const prop of expr.properties) {
                fixExpression(prop.value);
            }
            break;
        }
        case 'ArrayLiteralExpr': {
            for (const value of expr.values) {
                fixExpression(value);
            }
            break;
        }
        case 'ParenExpr': {
            fixExpression(expr.expr);
            break;
        }
        default: throw new Error(`Unrecognized Flow expression: ${(<flow.Expression>expr).kind}`);
    }
}

function fixStatement(stat: flow.Statement): void {
    switch (stat.kind) {
        case 'ExportEqualStat':
        case 'ExportDefaultStat': {
            fixExpression(stat.expr);
            break;
        }
        default:
    }
}

export function fixTestCase(program: flow.FlowProgram): void {
    program.statements = program.statements.filter((value: flow.Statement) => {
        switch (value.kind) {
            case 'ImportEqualStat':
            case 'ImportAsStat':
            case 'ImportNameStat': {
                if (
                    value.source.indexOf(`CodegenTypese'`) !== -1 ||
                    value.source.indexOf(`CodegenTypes'`) !== -1 ||
                    value.source.indexOf(`RCTExport'`) !== -1 ||
                    value.source.indexOf(`TurboModuleRegistry'`) !== -1 ||
                    value.source.indexOf(`codegenNativeComponent'`) !== -1 ||
                    value.source.indexOf(`codegenNativeCommands'`) !== -1
                ) {
                    return false;
                } else {
                    value.source = `'../lib/${value.source.substr(1)}`;
                    return true;
                }
            }
            default: return true;
        }
    });

    for (const stat of program.statements) {
        fixStatement(stat);
    }
}
