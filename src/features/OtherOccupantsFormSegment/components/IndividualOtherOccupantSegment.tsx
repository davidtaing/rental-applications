import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";

interface Props {
  key: string;
  index: string;
}

export function IndividualOtherOccupantSegment({ index }: Props) {
  return (
    <div className="individualOtherOccupant">
      {/* Full Name */}
      <LabelledInput
        labelText="Full Name:"
        id="fullname"
        name={`otherOccupants[${index}].fullname`}
        type="text"
      />
      {/* Gender */}
      <LabelledSelect
        labelText="Gender: "
        id="gender"
        name={`otherOccupants[${index}].gender`}
        values={["Male", "Female", "Other"]}
      />
      {/* Age */}
      <LabelledInput
        labelText="Age:"
        id="age"
        name={`otherOccupants[${index}].age`}
        type="number"
      />
      {/* Relation */}
      <LabelledSelect
        labelText="Relation:"
        id="fullname"
        name={`otherOccupants[${index}].relation`}
        values={[
          "Spouse/Significant Other",
          "Child",
          "Parent",
          "Grandparent",
          "Friend",
          "Housemate/Flatmate",
        ]}
      />
    </div>
  );
}
