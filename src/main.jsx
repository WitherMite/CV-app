import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CvApp from "./components/CV-app.jsx";
import cvQuestions from "./cv-questions.json";
import "./styles/index.css";

// cv questions is not flattend, since it doesnt change based on the UI at all I figured it doesnt matter and this is easier to understand
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvApp structureConfig={cvQuestions} />
  </StrictMode>
);
