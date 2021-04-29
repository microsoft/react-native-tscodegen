// @flow
declare type FormDataValue = any;
declare type Headers = {
  [name: string]: string;
};
declare type FormDataPart = {
  string: string;
  headers: Headers;
} | {
  uri: string;
  headers: Headers;
  name?: string;
  type?: string;
};
declare class FormData {
  constructor();
  append(key: string, value: FormDataValue): void;
  getParts(): FormDataPart[];
}
export default FormData;