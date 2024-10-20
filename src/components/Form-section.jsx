import InputField from "./Input-field.jsx";

// takes in an array representing questions to create a fieldset
// has a flag prop to allow generating a repeated subsection with a button (for edu/work exp)
// if submitted, fieldset is hidden, disabled, and replaced with an element containing submitted info
export default function FormSection({ isSubmitted }) {
  return (
    <fieldset disabled={isSubmitted}>
      <InputField
        labelText="This is a test"
        inputName="1"
        inputId="test"
        inputType="text"
        inputValue="yep"
      ></InputField>
      <InputField
        labelText="This is a test2"
        inputName="2"
        inputId="test2"
        inputType="textarea"
        inputValue="yep"
      ></InputField>
    </fieldset>
  );
}
