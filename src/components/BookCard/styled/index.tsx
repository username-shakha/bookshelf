import { styled, Typography } from "@mui/material";

export const STypography = styled(Typography)`
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
  padding: 8px;
  border-radius: 6px 6px 6px 0px;
  box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
  background: rgb(255, 77, 79);
`;

export const EditBook = styled("div")`
  cursor: pointer;
  padding: 8px;
  border-radius: 0px 6px 6px 6px;
  box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
  background: rgb(98, 0, 238);
`;
