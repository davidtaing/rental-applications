import { useFieldArray, useForm } from "react-hook-form";
import { FieldArrayButtons } from "../../../components/common/FieldArrayButtons";
import { GenderSelect } from "../../../components/common/GenderSelect";
import { LabelledInput } from "../../../components/common/LabelledInput";
import { FormNavigation } from "../../FormNavigation";
import { OtherOccupant, OtherOccupantsFormState } from "../types";
import { createOtherOccupant } from "../utils";
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
            label="Full Name:"
            registerReturn={register(`otherOccupants.${index}.fullname`)}
          />
          <OtherOccupantRelationSelect
            registerReturn={register(`otherOccupants.${index}.relation`)}
          />
          <LabelledInput
            type="number"
            label="Age:"
            registerReturn={register(`otherOccupants.${index}.age`)}
          />
          <GenderSelect
            registerReturn={register(`otherOccupants.${index}.gender`)}
          />
        </div>
      ))}
      <FieldArrayButtons<OtherOccupant>
        append={append}
        remove={remove}
        createItemFn={createOtherOccupant}
        arrayLength={fields.length}
        buttonSize="large"
        buttonText="Occupant"
      />
      <FormNavigation prevUrl="/tenant-details" nextUrl="/pet-details" />
    </div>
  );
}
