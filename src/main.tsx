import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import { fetcher } from "./componentsPage/SWR.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <App />
    </SWRConfig>
  </StrictMode>
);
