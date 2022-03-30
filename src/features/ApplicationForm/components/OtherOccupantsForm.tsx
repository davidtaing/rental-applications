import dynamic from "next/dynamic";
import { Formik, Form, FieldArray } from "formik";
import OtherOccupant from "../types/OtherOccupant";
import { createOtherOccupant } from "../utils";
import { OtherOccupantsDetails } from "../types/State";
import { ApplicationFormDispatch } from "../types/dispatch";

const OtherOccupantItem = dynamic(() => import("./OtherOccupantItem"));

interface OtherOccupantsFormProps {
  initialValues: OtherOccupantsDetails;
  dispatch: ApplicationFormDispatch;
}

/**
 * Form for Other Adults and Children,
 * i.e. Non-Rent Paying Adults and Children
 */
function OtherOccupantsForm({
  initialValues,
  dispatch,
}: OtherOccupantsFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => {
        const { values } = formik;

        return (
          <Form>
            <h1>Other Occupants</h1>
            <FieldArray name="occupants">
              {(arrayHelpers) => (
                <div>
                  {values.occupants.map((item, index) => (
                    <OtherOccupantItem
                      key={item.fullname}
                      onRemoveHandler={() => arrayHelpers.remove(index)}
                      handleChange={formik.handleChange}
                      index={index}
                    />
                  ))}
                  <button
                    onClick={() => arrayHelpers.push(createOtherOccupant())}
                  >
                    Add Occupant
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default OtherOccupantsForm;
