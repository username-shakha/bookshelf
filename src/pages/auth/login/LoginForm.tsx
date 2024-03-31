// import { StyledButton } from "@/styled/StyledButton";
import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";

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
          required
        />
        <FormInput
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          required
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
