import { Control, FieldPath, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  required?: boolean;
}

export type TBooksData = {
  data: [
    {
      book: {
        id: number;
        isbn: string;
        title: string;
        cover: string;
        author: string;
        published: number;
        pages: number;
      };
      status: number;
    }
  ];
  isOk: boolean;
  message: string;
};
