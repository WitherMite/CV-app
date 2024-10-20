import FormSection from "./Form-section.jsx";
import { useState } from "react";

// generates the app based on some config obj
// can pass a callback function to handle form submission
export default function CvApp({
  structureConfig,
  action = "",
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
      {structureConfig.map((section) => (
        <FormSection
          key={section.id}
          fields={section.fields}
          title={section.title}
          isSubmitted={isSubmitted}
        ></FormSection>
      ))}
      <button className="submit-cv">Submit</button>
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
