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
  const [subsets, setSubsets] = useState([{ fields, id: crypto.randomUUID() }]);

  // shallow copies should be fine, the nested objects' values wont ever change
  function addSubset() {
    setSubsets([...subsets, { fields, id: crypto.randomUUID() }]);
  }

  function removeSubset(deletedSubset) {
    const subsetsNext = subsets.filter((subset) => subset !== deletedSubset);
    setSubsets(subsetsNext);
  }

  return (
    <fieldset disabled={isSubmitted}>
      <legend>{title}</legend>
      {subsets.map((subset, i) => {
        const deleteBtn = repeatable && (
          <button type="button" onClick={() => removeSubset(subset)}>
            -
          </button>
        );

        return (
          <Subset
            key={subset.id}
            isSubmitted={isSubmitted}
            fields={subset.fields}
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

function Subset({ isSubmitted, fields, deleteBtn }) {
  return (
    <div className="field-subset-container">
      {fields.map((field) => (
        <InputField
          key={field.id}
          labelText={field.label}
          inputName={field.name}
          inputId={field.inputId}
          inputType={field.type}
          defaultValue={field.defaultValue}
          isSubmitted={isSubmitted}
        ></InputField>
      ))}
      {deleteBtn}
    </div>
  );
}
