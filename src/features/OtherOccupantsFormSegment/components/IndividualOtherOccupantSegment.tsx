import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";
import { GenderSelect } from "../../../components/common/GenderSelect";

interface Props {
  formikReference: string;
}

export function IndividualOtherOccupantSegment({ formikReference }: Props) {
  return (
    <div className="individualOtherOccupant">
      {/* Full Name */}
      <LabelledInput
        labelText="Full Name:"
        id="otherOccupantFullname"
        name={`${formikReference}.fullname`}
        type="text"
      />
      {/* Gender */}
      <GenderSelect formikReference={`${formikReference}.gender`} />
      {/* Age */}
      <LabelledInput
        labelText="Age:"
        id="otherOccupantAge"
        name={`${formikReference}.age`}
        type="number"
      />
      {/* Relation */}
      <LabelledSelect
        labelText="Relation:"
        id="otherOccupantRelation"
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
