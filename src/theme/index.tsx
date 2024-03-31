import { ReactNode } from "react";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import components from "./overrides";
interface IThemeProps {
  children: ReactNode;
}
export const Theme = ({ children }: IThemeProps) => {
  const themeOptions: ThemeOptions = {
    components,
  };
  const theme = createTheme(themeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
