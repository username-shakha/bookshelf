import { Link } from "react-router-dom";
import { FormFooterText, FormHeading, FormWrapper, StyledBackdrop } from "../styled";
import RegisterForm from "../register/RegisterForm";

export default function RegisterPage() {
  return (
    <StyledBackdrop>
      <FormWrapper>
        <FormHeading>Sign up</FormHeading>
        <RegisterForm />
        <FormFooterText>
          Already signed in? <Link to={"/login"}>Go to sign in. </Link>
        </FormFooterText>
      </FormWrapper>
    </StyledBackdrop>
  );
}
