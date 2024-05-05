import { alpha, Box, Menu, MenuProps, styled, Typography } from "@mui/material";

export const Info = styled(Typography)`
  color: rgb(51, 51, 51);
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-weight: 400;
  /* line-height: 15px; */
  letter-spacing: 0px;
  margin-bottom: 6px;
`;

export const CardTitle = styled(Typography)`
  color: rgb(21, 21, 21);
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  /* line-height: 20px; */
  letter-spacing: 0px;
  text-align: left;
`;

export const DeleteBook = styled("div")`
  cursor: pointer;
  display: grid;
  place-items: "center";
  padding: 8px;
  border-radius: 6px 6px 6px 0px;

  background: rgb(255, 77, 79);
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
  }
`;

export const EditBook = styled(Box)`
  cursor: pointer;
  padding: 8px;
  border-radius: 0px 6px 6px 6px;
  background: rgb(98, 0, 238);
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
  }
`;

export const BookStatus = styled(Box)`
  padding: 2px 12px;
  border-radius: 8.5px;
  color: rgb(255, 255, 255);
  font-family: Mulish, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  background: rgb(0, 255, 41);
`;

export const BookCardFooter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
