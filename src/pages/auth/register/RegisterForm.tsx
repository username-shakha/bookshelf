import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";
import useUserManagement from "@/hooks/useUserManagement";
import { useEffect } from "react";
import { getUserToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";

type TInputFieldTypes = {
  username: string;
  email: string;
  password: string;
  secret: string;
  confirmPassword?: string;
};
const margins = { ml: 0.5, mb: 0.7, color: "#242424" };
export default function RegisterForm() {
  const navigate = useNavigate();
  const { createNewUser } = useUserManagement();
  const { control, handleSubmit } = useForm<TInputFieldTypes>();

  useEffect(() => {
    const userToken = getUserToken();
    if (userToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <form
      onSubmit={handleSubmit(({ username, email, password, secret }) =>
        createNewUser({
          name: username,
          email: email,
          key: password,
          secret: secret,
        })
      )}
    >
      <Stack gap={2} pb={1.5}>
        <FormInput
          {...{ control, name: "username" }}
          variant="outlined"
          required
          placeholder="Enter your name"
          mylabel="User name"
          labelprops={{ sx: margins }}
        />

        <FormInput
          {...{ control, name: "email" }}
          variant="outlined"
          placeholder="Enter your email"
          mylabel="Email"
          labelprops={{ sx: margins }}
          required
        />

        <FormInput
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          mylabel="Password"
          labelprops={{ sx: margins }}
          required
        />

        <FormInput
          {...{ control, name: "secret" }}
          variant="outlined"
          placeholder="Enter your secret"
          mylabel="User secret"
          labelprops={{ sx: margins }}
          required
        />

        {/* <FormInput
          {...{ control, name: "confirmPassword" }}
          variant="outlined"
          placeholder="Enter your confirm password"
          mylabel="Confirm password"
          labelprops={{ sx: margins }}
          required
        /> */}

        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
