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
      values={Object.values(OtherOccupantRelation)}
    />
  );
}
