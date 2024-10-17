import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CvApp from "./components/CV-app.jsx";
import "./styles/index.css";

// TODO: pass a config obj to App from a json file
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvApp />
  </StrictMode>
);
