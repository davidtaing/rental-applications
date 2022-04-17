import LabelledSelect from "../../../components/common/LabelledSelect";
import { OtherOccupantRelation } from "../types";

interface Props {
  formikReference: string;
}

export function OtherOccupantRelationSelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      labelText="Relation:"
      id="otherOccupantRelation"
      name={formikReference}
      values={[
        OtherOccupantRelation.SPOUSE_OR_SO,
        OtherOccupantRelation.CHILD,
        OtherOccupantRelation.PARENT,
        OtherOccupantRelation.SIBLING,
        OtherOccupantRelation.GRANDPARENT,
        OtherOccupantRelation.FRIEND,
        OtherOccupantRelation.HOUSEMATE_OR_FLATMATE,
      ]}
    />
  );
}
