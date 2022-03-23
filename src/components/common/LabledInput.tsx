import { InputHTMLAttributes } from "react";

interface LabledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

function LabledInput({ labelText, id, ...otherProps }: LabledInputProps) {
  return (
    <div className="labed-input">
      <label className="form-label" htmlFor={id}>
        {labelText}
      </label>
      <input className="text-input" id={id} {...otherProps} />
    </div>
  );
}

export default LabledInput;
