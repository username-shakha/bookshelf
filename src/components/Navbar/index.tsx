import { Container, IconButton, Tooltip } from "@mui/material";
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
          <Tooltip title="Notifications">
            <IconButton>
              <BellIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton onClick={() => removeToken()}>
              <CustomUserAvatar />
            </IconButton>
          </Tooltip>
        </ContentRight>
      </NavbarInnerWrapper>
    </Container>
  );
}
