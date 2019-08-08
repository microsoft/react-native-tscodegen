import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';

export function tryParseEvent(info: ExportComponentInfo, propDecl: ts.PropertyDeclaration): cs.EventTypeShape {
  return undefined;
}
