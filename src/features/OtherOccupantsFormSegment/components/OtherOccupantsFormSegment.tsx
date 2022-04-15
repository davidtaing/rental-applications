import { FieldArray, useFormikContext } from "formik";
import { OtherOccupant } from "../types";
import { initOtherOccupantsState } from "../utils";
import { IndividualOtherOccupantSegment } from "./IndividualOtherOccupantSegment";

/**
 * Form Segment for non rent-paying occupants.
 * i.e. children and other adults.
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
              <IndividualOtherOccupantSegment
                key={idx}
                formikReference={`otherOccupants[${idx}]`}
              />
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
          </>
        )}
      />
    </div>
  );
}
