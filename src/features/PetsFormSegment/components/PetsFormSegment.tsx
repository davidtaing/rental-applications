import { FieldArray, useFormikContext } from "formik";
import { PetCategoryFormSegment } from "./PetCategoryFormSegment";
import { initPetState } from "../utils";

export function PetsFormSegment() {
  const {
    values: { pets },
  } = useFormikContext();

  return (
    <div className="petDetailsFormSegment">
      <h2>Pet Details</h2>
      <FieldArray
        name="pets"
        render={(arrayHelpers) => (
          <>
            {pets.map((item: any, idx: string) => (
              <PetCategoryFormSegment
                key={idx}
                formikReference={`pets[${idx}]`}
              />
            ))}
            <button
              type="button"
              onClick={() => arrayHelpers.push(initPetState())}
            >
              Add Pet
            </button>
            {pets.length > 0 ? (
              <button type="button" onClick={() => arrayHelpers.pop()}>
                Remove Pet
              </button>
            ) : null}
          </>
        )}
      />
    </div>
  );
}
