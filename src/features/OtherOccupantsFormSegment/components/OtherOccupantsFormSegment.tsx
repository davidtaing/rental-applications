import { FieldArray, useFormikContext } from "formik";
import { FormNavigation } from "../../FormNavigation";
import { OtherOccupant } from "../types";
import { initOtherOccupantsState } from "../utils";
import { IndividualOtherOccupantSegment } from "./IndividualOtherOccupantSegment";

/**
 * Corresponds to the /other-occupants path
 */
export function OtherOccupantsFormSegment() {
  const {
    values: { otherOccupants },
  } = useFormikContext();

  return (
    <div className="otherOccupantsDetailsFormSegment">
      <h2>Other Occupants</h2>
      <FieldArray
        name="otherOccupants"
        render={(arrayHelpers) => (
          <>
            {otherOccupants.map((item: OtherOccupant, idx: string) => (
              <IndividualOtherOccupantSegment key={idx} index={idx} />
            ))}
            <button
              type="button"
              onClick={() => arrayHelpers.push(initOtherOccupantsState())}
            >
              Add Occupant
            </button>
            {otherOccupants.length > 0 ? (
              <button type="button" onClick={() => arrayHelpers.pop()}>
                Remove Occupant
              </button>
            ) : null}
            <FormNavigation prevUrl="/tenant-details" nextUrl="/pet-details" />
          </>
        )}
      />
    </div>
  );
}
