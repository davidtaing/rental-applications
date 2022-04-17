import { useFormikContext } from "formik";
import { PetCategoryItem } from "./PetCategoryItem";
import { createPetCategory } from "../utils";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";

export function PetsFormSegment() {
  const {
    values: { pets },
  } = useFormikContext();

  return (
    <div className="petDetailsForm formSegment">
      <h2>Pet Details</h2>
      <FieldArrayFormSegment
        formikReference="pets"
        values={pets}
        createItemFn={createPetCategory}
        buttonText="Pet Type"
      >
        {pets.map((item: any, idx: string) => (
          <PetCategoryItem key={idx} formikReference={`pets[${idx}]`} />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
