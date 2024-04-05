import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        letterSpacing: "0",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontFamily: '"Mulish", sans-serif',
        fontSize: "16px",
        fontWeight: "500",
        borderRadius: "6px",
        border: "1px solid rgb(235, 235, 235) !important",
        color: "rgb(21, 21, 21)",
        backgroundColor: "rgb(254, 254, 254)",
        boxShadow: "0px 4px 18px 0px rgba(51, 51, 51, 0.04)",
        fieldset: { border: "none" },
        ":hover fieldset": {
          border: "none",
        },

        "&.Mui-focused fieldset": {
          border: `1px solid #1976d2 !important`,
        },
      },

      input: ({ theme }) => ({
        padding: "14px 16px 14px 16px",
        "&::placeholder": {
          opacity: 0.28,
          color: "rgb(21, 21, 21)",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "10px !important",
          "&::placeholder": {
            fontSize: "15px",
            opacity: 0.28,
            color: "rgb(21, 21, 21)",
          },
        },
      }),
    },
  },

  MuiBackdrop: {
    styleOverrides: {
      root: {
        padding: "0px 10px",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
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
