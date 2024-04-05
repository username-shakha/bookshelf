import { Box } from "@mui/material";
import styled from "styled-components";

export const NavbarInnerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  @media screen and (max-width: 750px) {
    align-items: start;
  }
`;

export const ContentLeft = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const ContentRight = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;
