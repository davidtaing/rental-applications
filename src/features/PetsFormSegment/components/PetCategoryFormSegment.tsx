import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";
import { PetTypes } from "../types";

interface Props {
  formikReference: string;
}

export function PetCategoryFormSegment({ formikReference }: Props) {
  return (
    <div className="petCategorySegment">
      <LabelledSelect
        labelText="Pet Type:"
        id="petType"
        name={`${formikReference}.type`}
        values={[PetTypes.DOG, PetTypes.CAT, PetTypes.BIRD, PetTypes.OTHER]}
      />
      <LabelledInput
        labelText="Amount:"
        id="petAmount"
        name={`${formikReference}.amount`}
        type="number"
      />
      <LabelledInput
        labelText="Comment:"
        id="petComment"
        name={`${formikReference}.comment`}
        type="text"
      />
    </div>
  );
}
