import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CvApp from "./components/CV-app.jsx";
import cvQuestions from "./cv-questions.json";
import "./styles/index.css";
// cv questions is not flattend, since it doesnt change based on the UI at all I figured it doesnt matter and this is easier to understand

function sendForm(form) {
  fetch(form.action, {
    method: "post",
    body: new FormData(form),
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvApp structureConfig={cvQuestions} submitCallback={sendForm} />
  </StrictMode>
);
