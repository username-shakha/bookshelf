import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";
import useUserManagement from "@/hooks/useUserManagement";

type TInputFieldTypes = {
  username: string;
  password: string;
  confirmPassword?: string;
};
const margins = { ml: 0.5, mb: 0.7, color: "#242424" };
export default function RegisterForm() {
  // const navigate = useNavigate();

  const { createNewUser } = useUserManagement();
  const { control, handleSubmit } = useForm<TInputFieldTypes>();

  // const submitRegister = async (registerData: TInputFieldTypes) => {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(registerData),
  //     });
  //     const result = await response.json();

  //     if (result.token !== undefined) {
  //       setToken(result.token);
  //       navigate("/");
  //     }
  //   } catch (error: unknown) {
  //     removeToken();
  //     console.error((error as Error).message);
  //     throw new Error((error as Error).message);
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit(({ username, password }) =>
        createNewUser({
          name: username,
          email: "shaxzodisrailov@mail.ru",
          key: password,
          secret: "IsrailovShaxzodMySecret",
        }).then((data) => {
          localStorage.setItem("is-authorized", JSON.stringify(data));
          console.log(data);
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
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          mylabel="Password"
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
