import InputField from "./Input-field.jsx";
import { useState } from "react";

// takes in an array representing questions to create a fieldset
// has a flag prop to allow generating a repeated subsection with a button (for edu/work exp)
// if submitted, fieldset is hidden, disabled, and replaced with an element containing submitted info
export default function FormSection({
  fields,
  title,
  isSubmitted,
  repeatable,
}) {
  const [subsetIds, setSubsetIds] = useState([crypto.randomUUID()]);

  function addSubset() {
    setSubsetIds([...subsetIds, crypto.randomUUID()]);
  }

  function removeSubset(deletedId) {
    const subsetIdsNext = subsetIds.filter((id) => id !== deletedId);
    setSubsetIds(subsetIdsNext);
  }

  return (
    <fieldset disabled={isSubmitted}>
      <legend>{title}</legend>
      {subsetIds.map((id, i) => {
        const deleteBtn = repeatable && (
          <button type="button" onClick={() => removeSubset(id)}>
            -
          </button>
        );

        return (
          <Subset
            key={id}
            isSubmitted={isSubmitted}
            fields={fields}
            index={i}
            deleteBtn={i > 0 && deleteBtn}
          ></Subset>
        );
      })}
      {repeatable && (
        <button type="button" onClick={addSubset}>
          +
        </button>
      )}
    </fieldset>
  );
}

function Subset({ isSubmitted, fields, deleteBtn, index }) {
  const suffix = index > 0 ? "-" + (index + 1) : "";
  return (
    <div className="field-subset-container">
      {fields.map((field) => (
        <InputField
          key={field.id}
          labelText={field.label}
          inputName={field.name + suffix}
          inputId={field.inputId + suffix}
          inputType={field.type}
          defaultValue={field.defaultValue}
          isSubmitted={isSubmitted}
        ></InputField>
      ))}
      {deleteBtn}
    </div>
  );
}
