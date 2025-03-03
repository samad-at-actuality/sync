import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { KonvaTextEditor } from "./KonvaTextEditor";
import { KonvaToolbar } from "./KonvaToolbar";
import { SyncFusion } from "./SyncFusion";
import { registerLicense } from "@syncfusion/ej2-base";

// Ngo9BigBOggjHTQxAR8/V1NMaF1cWmhNYVJpR2Nbek5zflRFal9TVBYiSV9jS3tTdUVgWXpad3RdRWJaVw==

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NMaF1cWmhNYVJpR2Nbek5zflRFal9TVBYiSV9jS3tTdUVgWXpad3RdRWJaVw==",
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <KonvaTextEditor /> */}
    {/* <KonvaToolbar /> */}
    {/* <App /> */}
    <SyncFusion />
  </StrictMode>,
);
