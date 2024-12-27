import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import { fetcher } from "./componentsPage/SWR.tsx";
import "./index.css";
import RoutesNav from "./routes/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <RoutesNav />
    </SWRConfig>
  </StrictMode>
);
