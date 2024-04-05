import { useForm } from "react-hook-form";
import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";
import useUserManagement from "@/hooks/useUserManagement";
import { useEffect, useState } from "react";
import { getUserToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import { emailPattern, PasswordPatten } from "@/constants";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  useEffect(() => {
    const userToken = getUserToken();
    if (userToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(({ username, email, password, secret }) =>
        createNewUser({
          name: username,
          email: email,
          key: password,
          secret: secret,
        }).then((data) => {
          try {
            console.log(data);
          } catch (error) {
            //setStateError(error)
            //or || data.message
            console.log(error);
          }
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
          type="email"
          placeholder="Enter your email"
          rules={{
            pattern: {
              value: emailPattern,
              message: "Email is invalid",
            },
          }}
          mylabel="Email"
          labelprops={{ sx: margins }}
          required
        />

        <FormInput
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          mylabel="Password"
          labelprops={{ sx: margins }}
          required
          rules={{
            pattern: {
              value: PasswordPatten,
              message: "Password is invalid. Example: Shaxzod_2424",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormInput
          {...{ control, name: "secret" }}
          type={showSecret ? "text" : "password"}
          variant="outlined"
          placeholder="Enter your secret"
          mylabel="User secret"
          labelprops={{ sx: margins }}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowSecret(!showSecret)}>
                  {!showSecret ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
