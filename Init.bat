pushd packages
pushd tslint-shared
npm link
npm install
popd
pushd update-test-files
npm link tslint-shared
npm install
popd
pushd RN-TSCodegen
npm link tslint-shared
npm install
popd
pushd RN-TSCodegen-Test
npm link tslint-shared
npm install
popd
popd