import { Box, Typography, styled } from "@mui/material";

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
