import { Box, Container, IconButton } from "@mui/material";
import Logo from "../Logo";
import { NavbarInnerWrapper } from "./styled";
import { BellIcon } from "../icons";
import CustomUserAvatar from "../Avatar";
import styled from "styled-components";

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
          <IconButton sx={{ ml: 2 }}>
            <CustomUserAvatar />
          </IconButton>
        </ContentRight>
      </NavbarInnerWrapper>
    </Container>
  );
}
