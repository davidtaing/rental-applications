import { UseFormRegisterReturn } from "react-hook-form";
import { LabelledSelect } from "../../../components/common/LabelledSelectRHF";
import { OtherOccupantRelation } from "../types";

interface Props {
  key: string;
  registerReturn: UseFormRegisterReturn;
}

export function OtherOccupantRelationSelect({ key, registerReturn }: Props) {
  return (
    <LabelledSelect
      fieldId={key}
      registerReturn={registerReturn}
      values={Object.values(OtherOccupantRelation)}
      label={"Relation:"}
    />
  );
}
