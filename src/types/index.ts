import { Control, FieldPath, FieldValues, Path, RegisterOptions } from "react-hook-form";

export type TUser = {
  id: number;
  name: string;
  email: string;
  key: string;
  secret: string;
};

export type generateMD5HashArgType = {
  method: string;
  url: string;
  body: null | string;
  secret: string;
};

export type TBook = {
  id: number;
  isbn: string;
  title: string;
  cover: string;
  author: string;
  published: number;
  pages: number;
};

export type TBookStatus = {
  status: number;
};

export type TBookWithStatus = {
  book: TBook;
  status: TBookStatus;
};

export type TResponse = {
  data: null | TBookWithStatus[] | TUser;
  isOk: boolean;
  message: string;
};
export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  required?: boolean;
}
