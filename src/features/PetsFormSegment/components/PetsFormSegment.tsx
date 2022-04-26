import { createPetCategory } from "../utils";
import { useFieldArray, useForm } from "react-hook-form";
import { PetCategory, PetsFormState } from "../types";
import { PetTypeSelect } from "./PetTypeSelect";
import { LabelledInput } from "../../../components/common/LabelledInput";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { FormNavigation } from "../../FormNavigation";

export function PetsFormSegment() {
  const { control, register } = useForm<PetsFormState>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "pets",
  });

  return (
    <div className="petDetailsForm formSegment">
      <h1>Pet Details</h1>
      {fields.map((field, index) => (
        <div key={index} className="petsDetailsForm__Item">
          <h3>Pets</h3>
          <PetTypeSelect registerReturn={register(`pets.${index}.type`)} />
          <LabelledInput
            type="number"
            label="Amount:"
            registerReturn={register(`pets.${index}.amount`)}
          />
          <LabelledInput
            label="Comment:"
            registerReturn={register(`pets.${index}.comment`)}
          />
        </div>
      ))}
      <FieldArrayButtons<PetCategory>
        append={append}
        remove={remove}
        createItemFn={createPetCategory}
        arrayLength={fields.length}
        buttonSize="large"
        buttonText="Pet"
      />
      <FormNavigation prevUrl="/other-occupants" submit={true} />
    </div>
  );
}
