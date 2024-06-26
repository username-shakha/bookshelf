// import { StyledButton } from "@/styled/StyledButton";
import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";

const margins = { ml: 0.5, mb: 0.7, color: "#242424" };

export default function LoginForm() {
  const { control } = useForm<{
    username: string;
    password: string;
  }>();
  return (
    <form noValidate autoComplete="off">
      <Stack gap={2} pb={1.5}>
        <FormInput
          {...{ control, name: "username" }}
          variant="outlined"
          placeholder={"Enter your user name"}
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
        {/* noSubmit */}
        <Button type="button" variant="contained" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
