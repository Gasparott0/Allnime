import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ead2ea",
    },
  },
  typography: {
    fontFamily: "inter",
    h1: {
      fontWeight: "900",
      fontSize: "4rem",
      color: "#ead2ea",
    },
    h2: {
      fontWeight: "900",
      fontSize: "2rem",
      color: "#ead2ea",
    },
    body1: {
      fontWeight: "bold",
    },
  },
});
