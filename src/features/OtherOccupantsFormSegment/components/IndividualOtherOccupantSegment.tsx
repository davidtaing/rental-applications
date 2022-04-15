import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";

interface Props {
  formikReference: string;
}

export function IndividualOtherOccupantSegment({ formikReference }: Props) {
  return (
    <div className="individualOtherOccupant">
      {/* Full Name */}
      <LabelledInput
        labelText="Full Name:"
        id="fullname"
        name={`${formikReference}.fullname`}
        type="text"
      />
      {/* Gender */}
      <LabelledSelect
        labelText="Gender: "
        id="gender"
        name={`${formikReference}.gender`}
        values={["Male", "Female", "Other"]}
      />
      {/* Age */}
      <LabelledInput
        labelText="Age:"
        id="age"
        name={`${formikReference}.age`}
        type="number"
      />
      {/* Relation */}
      <LabelledSelect
        labelText="Relation:"
        id="fullname"
        name={`${formikReference}.relation`}
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
