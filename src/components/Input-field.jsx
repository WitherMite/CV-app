import FormControl from "./Form-control.jsx";
import { useState } from "react";
import "../styles/input-field.css";

//  creates a prop customizable label/form control pair
// if submitted, field is hidden, disabled, and replaced with an element containing submitted info
export default function InputField({
  labelText,
  inputId,
  inputName,
  defaultValue,
  inputType,
  isSubmitted,
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <div className={"input-field" + (isSubmitted ? " hidden-field" : "")}>
        <label htmlFor={inputId}>{labelText}</label>
        <FormControl
          inputId={inputId}
          inputName={inputName}
          inputType={inputType}
          inputValue={value}
          hidden={isSubmitted}
          onChange={(e) => setValue(e.target.value)}
        ></FormControl>
      </div>
      {isSubmitted && (
        <section className="disabled-input-field">
          <h3>{labelText}</h3>
          <p>{value}</p>
        </section>
      )}
    </>
  );
}
