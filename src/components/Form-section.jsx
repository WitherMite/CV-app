import InputField from "./Input-field.jsx";

// takes in an array representing questions to create a fieldset
// has a flag prop to allow generating a repeated subsection with a button (for edu/work exp)
// if submitted, fieldset is hidden, disabled, and replaced with an element containing submitted info
export default function FormSection({ fields, title, isSubmitted }) {
  return (
    <fieldset disabled={isSubmitted}>
      <legend>{title}</legend>
      {fields.map((field) => (
        <InputField
          key={field.id}
          labelText={field.label}
          inputName={field.name}
          inputId={field.inputId}
          inputType={field.type}
          inputValue={field.defaultValue}
        ></InputField>
      ))}
    </fieldset>
  );
}
