// @flow
declare type NativeResponseType = "base64" | "blob" | "text";
declare type ResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
declare type Response = (null | undefined | Object) | string;
declare type XHRInterceptor = {
  requestSent: (id: number, url: string, method: string, headers: Object) => void;
  responseReceived: (id: number, url: string, status: number, headers: Object) => void;
  dataReceived: (id: number, data: string) => void;
  loadingFinished: (id: number, encodedDataLength: number) => void;
  loadingFailed: (id: number, error: string) => void;
};
declare class XMLHttpRequestEventTarget extends $2 {
  onload?: null | undefined | Function;
  onloadstart?: null | undefined | Function;
  onprogress?: null | undefined | Function;
  ontimeout?: null | undefined | Function;
  onerror?: null | undefined | Function;
  onabort?: null | undefined | Function;
  onloadend?: null | undefined | Function;
}
declare var $2: any;
declare class XMLHttpRequest extends $1 {
  static UNSENT: number;
  static OPENED: number;
  static HEADERS_RECEIVED: number;
  static LOADING: number;
  static DONE: number;
  UNSENT: number;
  OPENED: number;
  HEADERS_RECEIVED: number;
  LOADING: number;
  DONE: number;
  // EventTarget automatically initializes these to `null`.
  onload?: null | undefined | Function;
  onloadstart?: null | undefined | Function;
  onprogress?: null | undefined | Function;
  ontimeout?: null | undefined | Function;
  onerror?: null | undefined | Function;
  onabort?: null | undefined | Function;
  onloadend?: null | undefined | Function;
  onreadystatechange?: null | undefined | Function;
  readyState: number;
  responseHeaders?: null | undefined | Object;
  status: number;
  timeout: number;
  responseURL?: null | undefined | string;
  withCredentials: boolean;
  upload: XMLHttpRequestEventTarget;
  static setInterceptor(interceptor?: null | undefined | XHRInterceptor): void;
  constructor();
  responseType(): ResponseType;
  responseType(responseType: ResponseType): void;
  responseText(): string;
  response(): Response;
  // exposed for testing
  __didCreateRequest(requestId: number): void;
  // exposed for testing
  __didUploadProgress(requestId: number, progress: number, total: number): void;
  __didReceiveResponse(requestId: number, status: number, responseHeaders?: null | undefined | Object, responseURL?: null | undefined | string): void;
  __didReceiveData(requestId: number, response: string): void;
  __didReceiveIncrementalData(requestId: number, responseText: string, progress: number, total: number): void;
  __didReceiveDataProgress(requestId: number, loaded: number, total: number): void;
  // exposed for testing
  __didCompleteResponse(requestId: number, error: string, timeOutError: boolean): void;
  getAllResponseHeaders(): null | undefined | string;
  getResponseHeader(header: string): null | undefined | string;
  setRequestHeader(header: string, value: any): void;

  /**
   * Custom extension for tracking origins of request.
   */
  setTrackingName(trackingName: string): XMLHttpRequest;
  open(method: string, url: string, async?: null | undefined | boolean): void;
  send(data: any): void;
  abort(): void;
  setResponseHeaders(responseHeaders?: null | undefined | Object): void;
  setReadyState(newState: number): void;

  /* global EventListener */
  addEventListener(type: string, listener: any): void;
}
declare var $1: any;
export type { NativeResponseType };
export type { ResponseType };
export type { Response };
export default XMLHttpRequest;