// TODO: change to use controlled components and use a string prop to choose control type instead of passing jsx in the props
export default function FormControl({
  inputId,
  inputName,
  inputValue,
  inputType,
  controlElement,
}) {
  return (
    controlElement || (
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        defaultValue={inputValue}
      />
    )
  );
}
