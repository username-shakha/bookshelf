import { IFormControl } from "@/types";
import { TextFieldProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { Input } from "../Inputs/Input";

export const FormInput = <T extends FieldValues>({
  control,
  name,
  rules,
  required,
  disabled,
  ...props
}: IFormControl<T> & Omit<TextFieldProps, "name">) => {
  return (
    <Controller
      {...{ control, name, rules: { ...rules, required } }}
      render={({ field, fieldState: { error }, formState: { errors } }) => (
        <Input
          {...props}
          {...field}
          value={field.value ?? props.defaultValue ?? ""}
          error={Boolean(errors[name])}
          onChange={(e) => {
            field.onChange(e);
            props.onChange?.(e);
          }}
          label={
            error?.message === ""
              ? `${props.label} is required field`
              : error?.message ?? props.label
          }
          disabled={disabled}
        />
      )}
    />
  );
};
