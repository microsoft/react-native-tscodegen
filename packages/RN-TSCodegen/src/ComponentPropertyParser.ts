import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';

export function parseProperty(info: ExportComponentInfo, propDecl: ts.PropertyDeclaration): cs.PropTypeShape {
  throw new Error(`Member ${propDecl.name.getText()} in type ${info.typeNode.getText()} is expected to have a supported react-native component property type, instead of ${propDecl.type.getText()}.`);
}
