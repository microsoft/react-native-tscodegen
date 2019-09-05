// tslint:disable:prefer-array-literal

import { readFileSync, writeFileSync } from 'fs';
import * as os from 'os';
import * as path from 'path';

function replaceCodegenContent(filePath: string, content: string): void {
  const input = readFileSync(filePath, { encoding: 'utf-8' }).split(/\r?\n/);
  let output = '';
  let inContent = false;
  for (const line of input) {
    switch (line) {
      case '// CodegenOverloadings:Begin': {
        inContent = true;
        output += `${line}${os.EOL}`;
        output += `${content.split(/\r?\n/).join(os.EOL)}${os.EOL}`;
        break;
      }
      case '// CodegenOverloadings:End': {
        inContent = false;
        output += `${line}${os.EOL}`;
        break;
      }
      default: {
        if (!inContent) {
          output += `${line}${os.EOL}`;
        }
      }
    }
  }
  writeFileSync(filePath, output.substr(0, output.length - os.EOL.length), { encoding: 'utf-8' });
}

function getNumbers(min: number, max: number): number[] {
  const numbers = new Array<number>(max - min + 1);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i + min;
  }
  return numbers;
}

function generateAlt(count: number): string {
  const numbers = getNumbers(1, count);
  return `
export function alt<TKind, ${numbers.map((value: number) => { return `T${value}`; }).join(', ')}>(
${
    numbers
      .map((value: number) => {
        return `    p${value}: Parser<TKind, T${value}>`;
      }).join(`,${os.EOL}`)
    }
): Parser<TKind, (${numbers.map((value: number) => { return `T${value}`; }).join(' | ')})>;`;
}

function generateSeq(count: number): string {
  const numbers = getNumbers(1, count);
  return `
export function seq<TKind, ${numbers.map((value: number) => { return `T${value}`; }).join(', ')}>(
${
    numbers
      .map((value: number) => {
        return `    p${value}: Parser<TKind, T${value}>`;
      }).join(`,${os.EOL}`)
    }
): Parser<TKind, [${numbers.map((value: number) => { return `T${value}`; }).join(', ')}]>;`;
}

const overloadingCount = +process.argv[2];

replaceCodegenContent(path.join(__dirname, '../../src/Parsers/AlternativeParser.ts'), `${
  getNumbers(2, overloadingCount).map(generateAlt).join(os.EOL)
  }
`);

replaceCodegenContent(path.join(__dirname, '../../src/Parsers/SequencialParser.ts'), `${
  getNumbers(2, overloadingCount).map(generateSeq).join(os.EOL)
  }
`);
