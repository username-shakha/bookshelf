import { Box, Container, IconButton } from "@mui/material";
import styled from "styled-components";
import { NavbarInnerWrapper } from "./styled";
import CustomUserAvatar from "../Avatar";
import Logo from "../Logo";
import { BellIcon } from "../icons";
import { removeToken } from "@/utils/token";
import SearchBar from "./SearchBar";

const ContentLeft = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const ContentRight = styled(Box)``;

export default function Navbar() {
  return (
    <Container>
      <NavbarInnerWrapper>
        <ContentLeft>
          <Logo />
          <SearchBar />
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
