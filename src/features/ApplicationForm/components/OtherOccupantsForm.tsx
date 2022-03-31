import dynamic from "next/dynamic";
import { Formik, Form, FieldArray } from "formik";
import OtherOccupant from "../types/OtherOccupant";
import { createOtherOccupant } from "../utils";
import { OtherOccupantsDetails } from "../types/State";
import { ApplicationFormDispatch } from "../types/Dispatch";
import { Actions } from "../types/Actions";
import { useApplicationFormCtx } from "../contexts/ApplicationFormContext";

const OtherOccupantItem = dynamic(() => import("./OtherOccupantItem"));
/**
 * Form for Other Adults and Children,
 * i.e. Non-Rent Paying Adults and Children
 */
function OtherOccupantsForm() {
  const [{ otherOccupantsDetails }, dispatch] = useApplicationFormCtx();

  const onSubmitHandler = (values: OtherOccupantsDetails) =>
    dispatch({
      type: Actions.update,
      payload: { otherOccupantsDetails: values },
    });

  return (
    <Formik initialValues={otherOccupantsDetails} onSubmit={onSubmitHandler}>
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
