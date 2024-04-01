import { Controller, FieldValues } from "react-hook-form";
import { InputLabel, InputLabelProps, TextFieldProps } from "@mui/material";
import { Input } from "../Inputs/Input";
import { IFormControl } from "@/types";

export const FormInput = <T extends FieldValues>({
  control,
  name,
  rules,
  required,
  disabled,
  mylabel,
  labelprops,
  ...props
}: IFormControl<T> &
  Omit<TextFieldProps, "name"> & {
    mylabel?: string;
    labelprops?: InputLabelProps;
  }) => {
  return (
    <Controller
      {...{ control, name, rules: { ...rules, required } }}
      render={({ field, fieldState: { error }, formState: { errors } }) => (
        <div>
          {mylabel && (
            <InputLabel {...(labelprops && { ...labelprops })}>{mylabel}</InputLabel>
          )}
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
        </div>
      )}
    />
  );
};
