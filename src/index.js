import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
