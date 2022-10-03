import { createTheme } from "@mui/material";
const PRIMARY_MAIN = '#434e87';
const SECONDARY_MAIN = '#674ff8';
const CONTRAST_COLOR = '#fff';

export const theme = createTheme({
    palette: {
        primary: {
          main: PRIMARY_MAIN,
          light: "#5669a6",
          dark: "#2c3372",
          contrastText: CONTRAST_COLOR,
        },
        secondary: {
          main: SECONDARY_MAIN,
          light: "#adb4f0",
          dark: SECONDARY_MAIN,
          contrastText: CONTRAST_COLOR,
        },
      },
  });
  