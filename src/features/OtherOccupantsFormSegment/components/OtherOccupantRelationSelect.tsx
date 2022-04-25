import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelect";
import { OtherOccupantRelation } from "../types";

interface Props {
  registerReturn: UseFormRegisterReturn;
}

export function OtherOccupantRelationSelect({ registerReturn }: Props) {
  return (
    <LabelledSelect
      registerReturn={registerReturn}
      values={Object.values(OtherOccupantRelation)}
      label={"Relation:"}
    />
  );
}
