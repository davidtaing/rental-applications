import { FieldArray, useFormikContext } from "formik";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
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
      <FieldArrayFormSegment
        values={otherOccupants}
        formikReference="otherOccupants"
        initItem={initOtherOccupantsState}
        buttonText="Occupant"
      >
        {otherOccupants.map((item: OtherOccupant, idx: string) => (
          <IndividualOtherOccupantSegment
            key={idx}
            formikReference={`otherOccupants[${idx}]`}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
