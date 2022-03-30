import { ChangeEventHandler, MouseEventHandler } from "react";
import LabelledInput from "../../../components/common/LabelledInput";
import GenderSelect from "../../../components/GenderSelect";

interface OtherOccupantItemProps {
  index: number;
  onRemoveHandler: MouseEventHandler<HTMLButtonElement>;
  handleChange: ChangeEventHandler;
}

/**
 * Represents the individual occupant,
 * i.e. Non-rent paying adults & children
 */
function OtherOccupantItem({
  index,
  onRemoveHandler,
  handleChange,
}: OtherOccupantItemProps) {
  return (
    <div className="occupant-details">
      <LabelledInput
        id="fullname"
        name={`occupants[${index}].fullname`}
        type="text"
        labelText="Full Name:"
        onChange={handleChange}
      />
      <GenderSelect
        id="gender"
        name={`occupants[${index}].gender`}
        onChange={handleChange}
      />
      <LabelledInput
        id="age"
        name={`occupants[${index}].age`}
        type="number"
        min="0"
        labelText="Age:"
        onChange={handleChange}
      />
      <button onClick={onRemoveHandler}>Remove Occupant</button>
    </div>
  );
}

export default OtherOccupantItem;
