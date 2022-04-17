import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";
import { GenderSelect } from "../../../components/common/GenderSelect";
import { OtherOccupantRelationSelect } from "./OtherOccupantRelationSelect";

interface Props {
  formikReference: string;
}

export function OtherOccupantItem({ formikReference }: Props) {
  return (
    <div className="otherOccupantItem">
      <h3>Occupant</h3>
      <LabelledInput
        labelText="Full Name:"
        id="otherOccupantFullname"
        name={`${formikReference}.fullname`}
        type="text"
      />
      <GenderSelect formikReference={`${formikReference}.gender`} />
      <LabelledInput
        labelText="Age:"
        id="otherOccupantAge"
        name={`${formikReference}.age`}
        type="number"
      />
      <OtherOccupantRelationSelect
        formikReference={`${formikReference}.relation`}
      />
    </div>
  );
}
