pushd packages
pushd tslint-shared
call npm link
call npm install
popd
pushd ts-parsec
call npm link tslint-shared
call npm link
call npm install
popd
pushd update-test-files
call npm link tslint-shared
call npm link ts-parsec
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
popd