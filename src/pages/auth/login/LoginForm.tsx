// import { StyledButton } from "@/styled/StyledButton";
import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";
const margins = { ml: 0.5, mb: 0.7, color: "#242424" };
export default function LoginForm() {
  const { control } = useForm<{
    name: string;
    password: string;
  }>();
  return (
    <form action="">
      <Stack gap={2} pb={1.5}>
        <FormInput
          {...{ control, name: "name" }}
          variant="outlined"
          defaultValue={"john doe"}
          mylabel="User Name"
          labelprops={{ sx: { ...margins } }}
          required
        />

        <FormInput
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          mylabel="Password"
          labelprops={{ sx: { ...margins } }}
          required
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
