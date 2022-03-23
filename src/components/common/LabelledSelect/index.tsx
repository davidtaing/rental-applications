import { SelectHTMLAttributes } from "react";
import { Field } from "formik";

interface LabelledSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  values: Array<string>;
}

function LabelledSelect({
  id,
  labelText,
  values,
  ...otherProps
}: LabelledSelectProps) {
  return (
    <div className="labelled-select">
      <label className="form-label" htmlFor={id}>
        {labelText}
      </label>
      <Field as="select" className="dropdown" id={id} {...otherProps}>
        <option value="">Select a Value</option>
        {values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
    </div>
  );
}

export default LabelledSelect;
