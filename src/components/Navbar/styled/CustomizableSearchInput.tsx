import { styled, TextField } from "@mui/material";

const CustomizableSearchInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    // width: "100%",
    padding: "0px",
    // fontSize: "16px",
    // border: "1px solid #ccc",
    // borderRadius: "5px",
  },
  "& .MuiOutlinedInput-input": {
    // backgroundColor: theme.palette.background.default,
    // borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    padding: "12px 26px",
  },
  "& .MuiInputBase-inputAdornedStart, & .MuiInputBase-inputAdornedEnd": {
    // padding: "8px",
  },
}));

export default CustomizableSearchInput;
