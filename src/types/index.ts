import { Control, FieldPath, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  required?: boolean;
}
