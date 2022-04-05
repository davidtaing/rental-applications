import dynamic from "next/dynamic";
import { Formik, Form, FieldArray } from "formik";
import { useApplicationFormCtx } from "../../ApplicationForm/contexts/ApplicationFormContext";
import { Actions } from "../../ApplicationForm/types/Actions";
import { OtherOccupantsDetails } from "../../ApplicationForm/types/State";
import { createOtherOccupant } from "../../ApplicationForm/utils";

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
