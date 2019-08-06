import * as fs from 'fs';
import * as path from 'path';

function convertCodegenSchema(): void {
  console.log('Converting CodegenSchema.js ...');

  const inputPath = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/CodegenSchema.js`);
  const outputPath = path.join(__dirname, `../../RN-TSCodegen/src/CodegenSchema.ts`);
  const flowSourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
  const tsSourceCode = `
// tslint:disable:no-reserved-keywords
${flowSourceCode
      .replace(/\$ReadOnly</g, `Readonly<`)
      .replace(/\$ReadOnlyArray</g, `ReadonlyArray<`)
      .replace(/\{\|/g, `{`)
      .replace(/\|\}/g, `}`)
      .replace(/\}>,/g, `}>;`)
      .replace(/: \?/g, `: null | undefined | `)
      .replace(/([a-zA-Z_0-9$]+\??): ([^,]+),/g, '$1: $2;')
    }`;
  fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
}

convertCodegenSchema();
