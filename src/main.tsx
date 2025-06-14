import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/inter";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
