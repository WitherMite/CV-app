import FormSection from "./Form-section.jsx";
import { useState } from "react";

// generates the app based on some config obj
// can pass a callback function to handle form submission
export default function CvApp({
  structureConfig,
  action,
  submitCallback = () => {},
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <form
      className="cv-app"
      action={action}
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitted(true);
        submitCallback(e.target);
      }}
    >
      <p className="disclaimer">Never enter personal info to random forms.</p>
      {structureConfig.map((section) => (
        <FormSection
          key={section.id}
          fields={section.fields}
          title={section.title}
          repeatable={section.repeatable}
          isSubmitted={isSubmitted}
        ></FormSection>
      ))}
      <div className="form-buttons">
        <button className="submit-cv">Submit</button>
        <button
          className="edit-cv"
          type="button"
          onClick={() => setIsSubmitted(false)}
        >
          Edit
        </button>
      </div>
    </form>
  );
}
