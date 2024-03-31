import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledBackdrop = styled(Box)`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const FormWrapper = styled(Box)`
  width: 430px;
  padding: 48px 28px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;

export const FormHeading = styled("h2")`
  text-align: center;
  color: rgb(21, 21, 21);
  font-family: Mulish, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: "0%";
  margin-bottom: 36px;
`;

export const FormFooterText = styled(Typography)`
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: "0%";
  text-align: center;
  color: rgb(51, 51, 51);
  a {
    text-decoration: none;
    color: rgb(98, 0, 238);
  }
`;
