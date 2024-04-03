import { Control, FieldPath, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  required?: boolean;
}

export type TBook = {
  id: string;
  isbn: string;
  title: string;
  cover: string;
  author: string;
  published: number;
  pages: number;
  status: number;
};

export type TUser = {
  name: string;
  email: string;
  key: string;
  secret: string;
};

export type TNewUserResponse = {
  data: Pick<TUser, keyof TUser> & { id: number };
  isOk: boolean;
  message: string;
};
