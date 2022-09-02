const fs = require('fs');
const path = require('path');

function fix_typescript_utils_js() {
    const filepath = path.join(__dirname, 'lib/rncodegen/src/parsers/typescript/utils.js');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const fixed = content.replace(
        `if (node.type === 'ExportNamedDeclaration' && node.exportKind === 'type') {`,
        `if (node.type === 'ExportNamedDeclaration') {`
    );

    if (content === fixed) {
        console.log('fix_typescript_utils_js() fixed nothing!');
    } else {
        fs.writeFileSync(filepath, fixed, { encoding: 'utf-8' });
    }
}

function fix_typescript_modules_index() {
    const filepath = path.join(__dirname, 'lib/rncodegen/src/parsers/typescript/modules/index.js');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const fixed = content.replace(
        `case 'TSUnknownKeyword':`,
        `case 'TSParenthesizedType':
      {
        return translateTypeAnnotation(hasteModuleName, typeAnnotation.typeAnnotation, types, aliasMap, tryParse, cxxOnly);
      }

    case 'TSUnknownKeyword':`
    );

    if (content === fixed) {
        console.log('fix_typescript_modules_index() fixed nothing!');
    } else {
        fs.writeFileSync(filepath, fixed, { encoding: 'utf-8' });
    }
}

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
        `case 'TSUnionType':`,
        `case 'TSParenthesizedType':
      {
        return getTypeAnnotationForArray(name, typeAnnotation.typeAnnotation, defaultValue, types);
      }

    case 'TSUnionType':`
    ).replace(
        `const typeAnnotation = getValueFromTypes(annotation, types); // Covers: readonly T[]`,
        `const typeAnnotation = getValueFromTypes(annotation, types); // Covers: readonly T[]
  if (typeAnnotation.type === 'TSParenthesizedType') {
    return getTypeAnnotation(name, typeAnnotation.typeAnnotation, defaultValue, withNullDefault, types);
  }`,
    );

    if (content === fixed) {
        console.log('fix_typescript_components_props() fixed nothing!');
    } else {
        fs.writeFileSync(filepath, fixed, { encoding: 'utf-8' });
    }
}

fix_typescript_utils_js();
fix_typescript_modules_index();
fix_typescript_components_props();
