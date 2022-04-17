import LabelledSelect from "../../../components/common/LabelledSelect";
import { PetType } from "../types";

interface Props {
  formikReference: string;
}

export function PetTypeSelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      labelText="Type:"
      id="petType"
      name={formikReference}
      values={Object.values(PetType)}
    />
  );
}
