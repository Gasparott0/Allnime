import React from "react";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { theme } from "./assets/styles/theme";

export const StyleProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

function Providers({ children }) {
  return (
    <SnackbarProvider>
      <StyleProvider>{children}</StyleProvider>
    </SnackbarProvider>
  );
}

export default Providers;
