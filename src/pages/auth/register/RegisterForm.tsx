import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useUserManagement from "@/hooks/useUserManagement";
import { FormInput } from "@/components/Form/FormInput";
import { getUserToken } from "@/utils/token";
// import { emailPattern, passwordPatten } from "@/constants";

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
  const [show, setShow] = useState({
    password: false,
    confirm: false,
    secret: false,
  });

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
          mylabel="Email"
          labelprops={{ sx: margins }}
          required
          // rules={{
          //   pattern: {
          //     value: emailPattern,
          //     message: "Your message ...",
          //   },
          // }}
        />

        <FormInput
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          type={show.password ? "text" : "password"}
          mylabel="Password"
          labelprops={{ sx: margins }}
          required
          // rules={{
          //   pattern: {
          //     value: passwordPatten,
          //     message: "Your message ...",
          //   },
          //}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShow((prev) => ({ ...prev, password: !prev.password }))
                  }
                >
                  {!show.password ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormInput
          {...{ control, name: "confirmPassword" }}
          type={show.confirm ? "text" : "password"}
          variant="outlined"
          placeholder="Enter your confirm password"
          mylabel="Confirm password"
          labelprops={{ sx: margins }}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShow((prev) => ({ ...prev, confirm: !prev.confirm }))}
                >
                  {!show.confirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormInput
          {...{ control, name: "secret" }}
          type={show.secret ? "text" : "password"}
          variant="outlined"
          placeholder="Enter your secret"
          mylabel="User secret"
          labelprops={{ sx: margins }}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShow((prev) => ({ ...prev, secret: !prev.secret }))}
                >
                  {!show.secret ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
