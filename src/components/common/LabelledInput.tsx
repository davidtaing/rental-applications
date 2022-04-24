import { Field, FieldAttributes, useFormikContext } from "formik";

interface LabelledInputProps extends FieldAttributes<any> {
  labelText: string;
}

/**
 * Wraps Formik's Label Component and adds Label
 */
function LabelledInput({
  labelText,
  id,
  name,
  ...otherProps
}: LabelledInputProps) {
  const { handleChange } = useFormikContext();
  return (
    <div className="labelledInput">
      <label className="labelledInput__label" htmlFor={id}>
        {labelText}
      </label>
      <Field
        className="labelledInput__input"
        id={id}
        onChange={handleChange}
        name={name}
        {...otherProps}
      />
      <span className="labelledInput__error">Error: Invalid Input</span>
    </div>
  );
}

export default LabelledInput;
