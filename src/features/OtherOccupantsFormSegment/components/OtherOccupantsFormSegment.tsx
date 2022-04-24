import { useFieldArray, useForm, UseFormRegister } from "react-hook-form";
import { GenderSelect } from "../../../components/common/GenderSelectRHF";
import { LabelledInput } from "../../../components/common/LabelledInputRHF";
import { Gender } from "../../../types/Gender";
import { OtherOccupantsFormState } from "../types";
import { createOtherOccupant, initOtherOccupantsFormState } from "../utils";
import { OtherOccupantRelationSelect } from "./OtherOccupantRelationSelect";

/**
 * Form Segment for non rent-paying occupants.
 * i.e. children and other adults.
 */
export function OtherOccupantsFormSegment() {
  const { control, register } = useForm<OtherOccupantsFormState>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "otherOccupants",
  });

  return (
    <div className="otherOccupantsForm formSegment">
      <h1>Other Occupants</h1>
      {fields.map((field, index) => (
        <div key={field.id}>
          <h2>Occupant</h2>
          <LabelledInput
            key={field.id}
            label="Full Name:"
            registerReturn={register(`otherOccupants.${index}.fullname`)}
          />
          <OtherOccupantRelationSelect
            key={field.id}
            registerReturn={register(`otherOccupants.${index}.relation`)}
          />
          <LabelledInput
            type="number"
            key={field.id}
            label="Age:"
            registerReturn={register(`otherOccupants.${index}.age`)}
          />
          <GenderSelect
            key={field.id}
            registerReturn={register(`otherOccupants.${index}.gender`)}
          />
        </div>
      ))}

      <div className="fieldArray--btn-container">
        <button
          className="btn--secondary-outline"
          type="button"
          onClick={() => append(createOtherOccupant())}
        >
          Add Occupant
        </button>
        <button
          className="btn--danger-outline"
          type="button"
          onClick={() => remove(fields.length - 1)}
        >
          Remove Occupant
        </button>
      </div>
    </div>
  );
}
