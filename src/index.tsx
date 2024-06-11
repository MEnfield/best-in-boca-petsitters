import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createTheme, PaletteColor, ThemeProvider } from "@mui/material";
import AppContainer from "./components/AppContainer";
import "./index.css";
import "@fontsource/pacifico";
import "@fontsource/dosis";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    tertiary: PaletteColor;
  }
}

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF61A7",
      light: "#FFDDE4",
    },
    secondary: {
      main: "#A39FE1",
    },
    tertiary: palette.augmentColor({
      color: {
        main: "#FEECD6",
      },
    }),
  },
  typography: {
    fontFamily: "dosis",
    allVariants: {
      color: "primary",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          margin: "0px 8px",
          padding: 0,
          fontFamily: "dosis",
          textTransform: "none",
          fontSize: 16,
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
