import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontFamily: '"Mulish", sans-serif',
        fontSize: "16px",
        fontWeight: "400",
        borderRadius: "6px",
        border: "1px solid rgb(235, 235, 235)",
        color: "rgb(21, 21, 21)",
        backgroundColor: "rgb(254, 254, 254)",
        boxShadow: "0px 4px 18px 0px rgba(51, 51, 51, 0.04)",
      },

      input: {
        padding: "14px 16px 14px 16px !important",
        "&::placeholder": {
          opacity: 0.28,
          color: "rgb(21, 21, 21)",
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        fontFamily: '"Mulish", sans-serif',
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        letterSpacing: "0px",
        padding: "10px 24px 10px 24px",
        borderRadius: "4px",
      },
      contained: {
        color: "rgb(254, 254, 254)",
        background: "rgb(98, 0, 238)",
      },
      outlined: {
        color: "rgb(98, 0, 238)",
        border: "1px solid rgb(98, 0, 238)",
      },
    },
  },
};

export default components;
