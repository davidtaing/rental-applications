import { createPetCategory } from "../utils";
import { useFieldArray, useForm } from "react-hook-form";
import { PetsFormState } from "../types";
import { PetTypeSelect } from "./PetTypeSelect";

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
          <label>Amount:</label>
          <input
            type="number"
            key={field.id}
            {...register(`pets.${index}.amount`)}
          />
          <label>Comment:</label>
          <input key={field.id} {...register(`pets.${index}.comment`)} />
        </div>
      ))}
      <div className="fieldArray--btn-container">
        <button
          className="btn--secondary-outline"
          type="button"
          onClick={() => append(createPetCategory())}
        >
          Add Pets
        </button>
        <button
          className="btn--danger-outline"
          type="button"
          onClick={() => remove(fields.length - 1)}
        >
          Remove Pets
        </button>
      </div>
    </div>
  );
}
