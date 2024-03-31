import { Link } from "react-router-dom";
import { FormFooterText, FormHeading, FormWrapper, StyledBackdrop } from "../styled";
import LoginForm from "../login/LoginForm";

export default function LoginPage() {
  return (
    <StyledBackdrop>
      <FormWrapper>
        <FormHeading>Sign in</FormHeading>
        <LoginForm />
        <FormFooterText>
          Already signed up? <Link to={"/register"}>Go to sign up.</Link>
        </FormFooterText>
      </FormWrapper>
    </StyledBackdrop>
  );
}
