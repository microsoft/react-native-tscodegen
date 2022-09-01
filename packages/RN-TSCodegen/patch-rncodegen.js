const fs = require('fs');
const path = require('path');

function fix_typescript_utils_js() {
    const filepath = path.join(__dirname, 'lib/rncodegen/src/parsers/typescript/utils.js');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const fixed = content.replace(
        `if (node.type === 'ExportNamedDeclaration' && node.exportKind === 'type') {`,
        `if (node.type === 'ExportNamedDeclaration') {`
    );
    fs.writeFileSync(filepath, fixed, { encoding: 'utf-8' });
}

function fix_typescript_modules_index() {
    const filepath = path.join(__dirname, 'lib/rncodegen/src/parsers/typescript/modules/index.js');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const fixed = content.replace(
        `case 'TSUnknownKeyword':`,
        `case 'TSParenthesizedType':
      {
        return translateFunctionTypeAnnotation(hasteModuleName, typeAnnotation.typeAnnotation, types, aliasMap, tryParse, cxxOnly);
      }

    case 'TSUnknownKeyword':`
    );
    fs.writeFileSync(filepath, fixed, { encoding: 'utf-8' });
}

fix_typescript_utils_js();
fix_typescript_modules_index();
