import LabelledInput from "../../../components/common/LabelledInput";
import { PetTypeSelect } from "./PetTypeSelect";

interface Props {
  formikReference: string;
}

export function PetCategoryItem({ formikReference }: Props) {
  return (
    <div className="petCategoryItem">
      <h3>Pets</h3>
      <PetTypeSelect formikReference={`${formikReference}.type`} />
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
