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
      <label className="form-label" htmlFor={id}>
        {labelText}
      </label>
      <Field
        className="text-input"
        id={id}
        onChange={handleChange}
        name={name}
        {...otherProps}
      />
      <span className="input__error-message">Error: Invalid Input</span>
    </div>
  );
}

export default LabelledInput;
