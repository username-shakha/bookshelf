import { useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FormInput } from "@/components/Form/FormInput";
// import { setToken, removeToken } from "@/utils/token";

// import { useNavigate } from "react-router-dom";

type TInputFieldTypes = {
  username: string;
  password: string;
};

export default function RegisterForm() {
  // const navigate = useNavigate();

  const { control } = useForm<TInputFieldTypes>();

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
  //       navigate("/root");
  //     }
  //   } catch (error: unknown) {
  //     removeToken();
  //     console.error((error as Error).message);
  //     throw new Error((error as Error).message);
  //   }
  // };
  //onSubmit={handleSubmit((data) => submitRegister(data))}
  return (
    <form>
      <Stack gap={2} pb={1.5}>
        <FormInput
          {...{ control, name: "username" }}
          variant="outlined"
          required
          placeholder="Enter your name"
        />
        <FormInput
          {...{ control, name: "password" }}
          variant="outlined"
          placeholder="Enter your password"
          required
        />

        {/* <FormInput
          {...{ control, name: "confirmPassword" }}
          variant="outlined"
          placeholder="Confirm password"
          required
        /> */}
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
