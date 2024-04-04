import { Box, Container, IconButton } from "@mui/material";
import styled from "styled-components";
import { NavbarInnerWrapper } from "./styled";
import CustomUserAvatar from "../Avatar";
import Logo from "../Logo";
import { BellIcon } from "../icons";
import { removeToken } from "@/utils/token";

const ContentLeft = styled(Box)``;
const ContentRight = styled(Box)``;

export default function Navbar() {
  return (
    <Container>
      <NavbarInnerWrapper>
        <ContentLeft>
          <Logo />
        </ContentLeft>
        <ContentRight>
          <IconButton>
            <BellIcon />
          </IconButton>
          <IconButton sx={{ ml: 2 }} onClick={() => removeToken()}>
            <CustomUserAvatar />
          </IconButton>
        </ContentRight>
      </NavbarInnerWrapper>
    </Container>
  );
}
