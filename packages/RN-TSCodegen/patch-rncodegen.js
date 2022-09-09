const fs = require('fs');
const path = require('path');

function fix_typescript_components_props() {
    const filepath = path.join(__dirname, 'lib/rncodegen/src/parsers/typescript/components/props.js');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const fixed = content.replace(
        `}).reduce((acc, item) => {`,
        `}).filter(Boolean).reduce((acc, item) => {`
    ).replace(
        `const alias = types[propsTypeName];`,
        `const alias = types[propsTypeName];
  `+ 'if (!alias) throw new Error(`Failed to find definition for "${ propsTypeName }", please check that you have a valid codegen typescript file`);'
    ).replace(
        `if (typeAnnotation.type === 'TSUnionType' && typeAnnotation.types.some(t => t.type === 'TSNullKeyword' || t.type === 'TSUndefinedKeyword')) {`,
        `if (typeAnnotation.type === 'TSParenthesizedType') {
    typeAnnotation = typeAnnotation.typeAnnotation;
  }
  if (typeAnnotation.type === 'TSUnionType' && typeAnnotation.types.some(t => t.type === 'TSNullKeyword' || t.type === 'TSUndefinedKeyword')) {`,
    );

    if (content === fixed) {
        console.log('fix_typescript_components_props() fixed nothing!');
    } else {
        fs.writeFileSync(filepath, fixed, { encoding: 'utf-8' });
    }
}

fix_typescript_components_props();
