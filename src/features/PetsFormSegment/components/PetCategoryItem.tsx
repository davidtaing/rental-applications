import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";
import { PetTypes } from "../types";

interface Props {
  formikReference: string;
}

export function PetCategoryItem({ formikReference }: Props) {
  return (
    <div className="petCategoryItem">
      <h3>Pets</h3>
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
