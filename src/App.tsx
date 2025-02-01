import "./App.css";
import "./shared/lib/styles/common.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/lib/constants/theme";
import { Router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
