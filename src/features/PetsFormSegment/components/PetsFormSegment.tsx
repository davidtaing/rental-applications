import { createPetCategory } from "../utils";
import { useFieldArray, useForm } from "react-hook-form";
import { PetCategory, PetsFormState } from "../types";
import { PetTypeSelect } from "./PetTypeSelect";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";

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
          <PetTypeSelect
            key={field.id}
            registerReturn={register(`pets.${index}.type`)}
          />
          <LabelledInput
            type="number"
            key={field.id}
            label="Amount:"
            registerReturn={register(`pets.${index}.amount`)}
          />
          <LabelledInput
            key={field.id}
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
    </div>
  );
}
