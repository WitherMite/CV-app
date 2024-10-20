import FormControl from "./Form-control.jsx";
import { useState } from "react";

//  creates a prop customizable label/form control pair
export default function InputField({
  labelText,
  inputId,
  inputName,
  defaultValue,
  inputType,
  isSubmitted,
}) {
  const [value, setValue] = useState(defaultValue);

  if (!isSubmitted)
    return (
      <div className="inputField">
        <label htmlFor={inputId}>{labelText}</label>
        <FormControl
          inputId={inputId}
          inputName={inputName}
          inputType={inputType}
          inputValue={value}
          onChange={(e) => setValue(e.target.value)}
        ></FormControl>
      </div>
    );

  return (
    <section className="disabledInputField">
      <h3>{labelText}</h3>
      <p>{value}</p>
    </section>
  );
}
