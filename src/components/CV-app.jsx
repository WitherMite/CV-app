import FormSection from "./Form-section.jsx";
import "../styles/CV-app.css";

// generates the app based on some config obj
export default function CvApp() {
  return (
    <form className="cv-app">
      {/* gen info */}
      <FormSection></FormSection>
      {/* education */}
      <FormSection></FormSection>
      {/* work exp */}
      <FormSection></FormSection>
      <button className="submit-cv">Submit</button>
      <button className="edit-cv">Edit</button>
    </form>
  );
}
