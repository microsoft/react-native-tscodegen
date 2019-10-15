
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <ReactCommon/turbomodule/core/TurboModule.h>

namespace facebook {
namespace react {

class JSI_EXPORT NativeSampleTurboModuleCxxSpecJSI : public TurboModule {
protected:
  NativeSampleTurboModuleCxxSpecJSI(std::shared_ptr<JSCallInvoker> jsInvoker);

public:
virtual jsi::String getHello(jsi::Runtime &rt, const jsi::String &name) = 0;

};

} // namespace react
} // namespace facebook
