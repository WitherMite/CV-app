import FormSection from "./Form-section.jsx";
import { useState } from "react";
import "../styles/CV-app.css";

// generates the app based on some config obj
export default function CvApp({ structureConfig }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.table(structureConfig);
  return (
    <form className="cv-app">
      {/* gen info */}
      <FormSection isSubmitted={isSubmitted}></FormSection>
      {/* education */}
      <FormSection isSubmitted={isSubmitted}></FormSection>
      {/* work exp */}
      <FormSection isSubmitted={isSubmitted}></FormSection>
      <button
        className="submit-cv"
        type="button"
        onClick={() => setIsSubmitted(true)}
      >
        Submit
      </button>
      <button
        className="edit-cv"
        type="button"
        onClick={() => setIsSubmitted(false)}
      >
        Edit
      </button>
    </form>
  );
}
