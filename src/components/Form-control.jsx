export default function FormControl({
  inputId,
  inputName,
  inputValue,
  inputType,
  hidden,
  onChange,
}) {
  switch (inputType) {
    // add more cases as needed, would be a waste of time otherise I think
    case "textarea":
      return (
        <textarea
          name={inputName}
          id={inputId}
          defaultValue={inputValue}
          hidden={hidden}
          onChange={onChange}
        ></textarea>
      );
    default:
      return (
        <input
          type={inputType}
          id={inputId}
          name={inputName}
          defaultValue={inputValue}
          hidden={hidden}
          onChange={onChange}
        />
      );
  }
}
