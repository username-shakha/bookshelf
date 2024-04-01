import { Box, Button, styled } from "@mui/material";
import notFoundImg from "@/assets/404.jpeg";
import { useNavigate } from "react-router-dom";

const Backdrop = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
});
const Actions = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Backdrop>
      <img src={notFoundImg} alt="not found page" />
      <Actions>
        <Button onClick={() => navigate("/root")} variant="contained">
          Go Home Page
        </Button>
        <Button onClick={() => navigate("/root")} variant="outlined">
          Reload Page
        </Button>
      </Actions>
    </Backdrop>
  );
}
