import { ChangeEventHandler } from "react";

interface LabledInputProps {
  id: string;
  name: string;
  text: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

function LabledTextInput({ id, name, text, handleChange }: LabledInputProps) {
  return (
    <div className="labed-input">
      <label className="form-label" htmlFor={id}>
        {text}
      </label>
      <input
        className="text-input"
        id={id}
        name={name}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

export default LabledTextInput;
