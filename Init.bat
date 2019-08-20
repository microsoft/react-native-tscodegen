pushd packages
rmdir   tslint-shared\node_modules                 /Q /S
del     tslint-shared\package-lock.json         /F /Q /S
rmdir   ts-parsec\node_modules                     /Q /S
del     ts-parsec\package-lock.json             /F /Q /S
rmdir   minimum-flow-parser\node_modules           /Q /S
del     minimum-flow-parser\package-lock.json   /F /Q /S
rmdir   update-test-files\node_modules             /Q /S
del     update-test-files\package-lock.json     /F /Q /S
rmdir   RN-TSCodegen\node_modules                  /Q /S
del     RN-TSCodegen\package-lock.json          /F /Q /S
rmdir   RN-TSCodegen-Test\node_modules             /Q /S
del     RN-TSCodegen-Test\package-lock.json     /F /Q /S
pushd tslint-shared
call npm link
call npm install
popd
pushd ts-parsec
call npm link tslint-shared
call npm link
call npm install
popd
pushd minimum-flow-parser
call npm link tslint-shared
call npm link ts-parsec
call npm link
call npm install
popd
pushd update-test-files
call npm link tslint-shared
call npm link ts-parsec
call npm link minimum-flow-parser
call npm install
popd
pushd RN-TSCodegen
call npm link tslint-shared
call npm install
popd
pushd RN-TSCodegen-Test
call npm link tslint-shared
call npm install
popd
pushd ts-parsec
call npm run build
call npm run test
popd
pushd minimum-flow-parser
call npm run build
call npm run test
popd
pushd update-test-files
call npm run build
popd
pushd RN-TSCodegen
call npm run build
call npm run test
popd
pushd RN-TSCodegen-Test
call npm run build
popd
popd