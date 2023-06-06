import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F04506",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "'DM Sans',sans-serif",
    subtitle1: {
      fontFamily: "'Quicksand',sans-serif",
    },
    button: {
      fontFamily: "'Quicksand',sans-serif",
      textTransform: "capitalize",
      fontSize: "16px",
    },
  },
});
