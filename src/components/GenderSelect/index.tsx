import { ChangeEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

function GenderSelect({ onChange }: Props) {
  return (
    <div className="gender-select">
      <label className="form-label" htmlFor="gender">
        Gender:
      </label>
      <select
        className="dropdown"
        id="gender"
        name="gender"
        onChange={onChange}
      >
        <option value="">Select a Value</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default GenderSelect;
