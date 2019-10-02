
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <react/modules/PlaygroundModule/NativeModules.h>

namespace facebook {
namespace react {

static jsi::Value __hostFunction_NativeSampleTurboModuleCxxSpecJSI_getHello(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  return static_cast<NativeSampleTurboModuleCxxSpecJSI *>(&turboModule)->getHello(rt, args[0].getString(rt));
}

NativeSampleTurboModuleCxxSpecJSI::NativeSampleTurboModuleCxxSpecJSI(std::shared_ptr<JSCallInvoker> jsInvoker)
  : TurboModule("SampleTurboModule", jsInvoker) {
  methodMap_["getHello"] = MethodMetadata {1, __hostFunction_NativeSampleTurboModuleCxxSpecJSI_getHello};
}


} // namespace react
} // namespace facebook
