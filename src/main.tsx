import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init, backButton, isTMA } from "@telegram-apps/sdk-react";
import "./index.css";
import App from "./App.tsx";

if (isTMA()) {
  init();
  backButton.mount();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
