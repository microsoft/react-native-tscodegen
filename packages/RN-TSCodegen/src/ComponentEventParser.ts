import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';

export function tryParseEvent(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.EventTypeShape {
  return undefined;
}
