import { SelectHTMLAttributes } from "react";
import { Field } from "formik";

interface LabelledSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  values: Array<string>;
}

/**
 * Wraps Formik's Label Component (as a Select Element) with added Label
 */
function LabelledSelect({
  id,
  labelText,
  values,
  ...otherProps
}: LabelledSelectProps) {
  return (
    <div className="labelledSelect">
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
