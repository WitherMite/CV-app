import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CvApp from "./components/CV-app.jsx";
import cvQuestions from "./cv-questions.json";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvApp structureConfig={cvQuestions} />
  </StrictMode>
);
