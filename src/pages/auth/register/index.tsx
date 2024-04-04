import { Link } from "react-router-dom";
import { FormFooterText, FormHeading, FormWrapper, StyledBackdrop } from "../styled";
import RegisterForm from "../register/RegisterForm";
import { Container } from "@mui/material";

export default function RegisterPage() {
  return (
    <StyledBackdrop>
      <Container>
        <FormWrapper>
          <FormHeading>Sign up</FormHeading>
          <RegisterForm />
          <FormFooterText>
            Already signed in? <Link to={"/login"}>Go to sign in. </Link>
          </FormFooterText>
        </FormWrapper>
      </Container>
    </StyledBackdrop>
  );
}
