pushd packages
pushd tslint-shared
npm link
popd
pushd ts-parsec
npm link
popd
pushd ts-parsec
npm link tslint-shared
popd
pushd update-test-files
npm link tslint-shared
npm link ts-parsec
popd
pushd RN-TSCodegen
npm link tslint-shared
popd
pushd RN-TSCodegen-Test
npm link tslint-shared
popd
pushd tslint-shared
npm install
popd
pushd ts-parsec
npm install
popd
pushd update-test-files
npm install
popd
pushd RN-TSCodegen
npm install
popd
pushd RN-TSCodegen-Test
npm install
popd
popd