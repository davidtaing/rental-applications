import { Field, FieldAttributes, useFormikContext } from "formik";

interface LabelledInputProps extends FieldAttributes<any> {
  labelText: string;
}

function LabelledInput({
  labelText,
  id,
  name,
  ...otherProps
}: LabelledInputProps) {
  const { handleChange } = useFormikContext();
  return (
    <div className="labed-input">
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
    </div>
  );
}

export default LabelledInput;
