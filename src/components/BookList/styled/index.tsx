import { Box, InputLabel, Typography, styled } from "@mui/material";

export const BookListHeader = styled(Box)({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  margin: "36px 0px",
});

export const BookListContent = styled(Box)({
  display: "flex",
  flexWrap: "wrap",

  gap: "24px",
});

export const BookListCount = styled(Typography)({
  color: "rgb(254, 254, 254)",
  fontFamily: '"Mulish", sans-serif',
  fontSize: "36px",
  fontWeight: 700,
  lineHeight: "45px",
  letterSpacing: "0px",
  marginBottom: 12,
  span: {
    color: "rgb(98, 0, 238)",
  },
});

export const BookListSubtitle = styled(Typography)({
  color: "rgb(254, 254, 254)",
  fontFamily: '"Mulish", sans-serif',
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "25px",
  letterSpacing: "0px",
  textAlign: "left",
});

export const AddBookDialog = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "430px",
  padding: "24px 28px 24px 28px",
  borderRadius: "12px",
  boxShadow: "0px 4px 32px 0px rgba(51, 51, 51, 0.04)",
  background: "rgb(254, 254, 254)",
});

export const AddBookDialogTitle = styled(Typography)({
  color: "rgb(21, 21, 21)",
  fontFamily: "Mulish",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "25px",
  letterSpacing: 0,
  textAlign: "left",
});

// eslint-disable-next-line react-refresh/only-export-components
export const disabledNumer = {
  'input[type="number"]::-webkit-inner-spin-button': {
    display: "none",
  },
  'input[type="number"]::-webkit-outer-spin-button': {
    display: "none",
  },
  '&:hover input[type="number"]::-webkit-inner-spin-button': {
    display: "none",
  },
  '&:hover input[type="number"]::-webkit-outer-spin-button': {
    display: "none",
  },
};

export const StyledInputLabel = styled(InputLabel)({
  color: "rgb(21, 21, 21)",
  fontFamily: `"Mulish", sans-serif`,
  fontSize: "14px",
  fontWeight: 500,
  paddingBottom: "4px",
});
