import FormControl from "./Form-control.jsx";

//  creates a prop customizable label/form control pair
export default function InputField({
  labelText,
  inputId,
  inputName,
  inputValue,
  inputType,
  children,
}) {
  return (
    <div className="inputField">
      <label htmlFor={inputId}>{labelText}</label>
      <FormControl
        controlElement={children}
        inputId={inputId}
        inputName={inputName}
        inputType={inputType}
        inputValue={inputValue}
      ></FormControl>
    </div>
  );
}
