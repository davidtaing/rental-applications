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
      <label className="labelledSelect__label" htmlFor={id}>
        {labelText}
      </label>
      <Field
        as="select"
        className="labelledSelect__select"
        id={id}
        {...otherProps}
      >
        <option className="labelledSelect__option" value="">
          Select a Value
        </option>
        {values.map((item) => (
          <option className="labelledSelect__option" key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
      <span className="input__error-message">Error: Invalid Input</span>
    </div>
  );
}

export default LabelledSelect;
