import { Container, IconButton } from "@mui/material";
import { ContentLeft, NavbarInnerWrapper, ContentRight } from "./styled";
import SearchBar from "./SearchBar";
import CustomUserAvatar from "../Avatar";
import Logo from "../Logo";
import { BellIcon } from "../icons";
import { removeToken } from "@/utils/token";

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
          <IconButton onClick={() => removeToken()}>
            <CustomUserAvatar />
          </IconButton>
        </ContentRight>
      </NavbarInnerWrapper>
    </Container>
  );
}
