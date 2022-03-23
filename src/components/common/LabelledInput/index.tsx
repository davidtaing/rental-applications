import { InputHTMLAttributes } from "react";
import { Field } from "formik";

interface LabelledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

function LabelledInput({ labelText, id, ...otherProps }: LabelledInputProps) {
  return (
    <div className="labed-input">
      <label className="form-label" htmlFor={id}>
        {labelText}
      </label>
      <Field className="text-input" id={id} {...otherProps} />
    </div>
  );
}

export default LabelledInput;
