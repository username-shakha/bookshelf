import { Controller, FieldValues } from "react-hook-form";
import { InputLabel, InputLabelProps, TextFieldProps } from "@mui/material";
import { Input } from "../Inputs/Input";
import { IFormControl } from "@/types";
import { ErrorLabel, ErrorTextField } from "@/theme/style-constants";
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
            <InputLabel {...(labelprops && { ...labelprops })}>
              {error?.message === "" ? (
                <>
                  {`${mylabel} `}
                  <span style={ErrorLabel}>is required field</span>
                </>
              ) : (
                error?.message ?? mylabel
              )}
            </InputLabel>
          )}
          <Input
            {...props}
            {...field}
            value={field.value ?? props.defaultValue ?? ""}
            {...(Boolean(errors[name]) && {
              style: { ...ErrorTextField },
              focused: false,
            })}
            onChange={(e) => {
              field.onChange(e);
              props.onChange?.(e);
            }}
            disabled={disabled}
          />
        </div>
      )}
    />
  );
};
