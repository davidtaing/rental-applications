import { Formik, Form, FieldArray } from "formik";
import OtherOccupant from "../../types/OtherOccupantInterface";
import dynamic from "next/dynamic";

const OtherOccupantItem = dynamic(() => import("./OtherOccupantItem"));

const newOccupant = (): OtherOccupant => ({ fullname: "", gender: "", age: 0 });
const initialValues = { occupants: new Array<OtherOccupant>() };

/**
 * Form for Other Adults and Children,
 * i.e. Non-Rent Paying Adults and Children
 */
function OtherOccupantsForm() {
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
                  <button onClick={() => arrayHelpers.push(newOccupant())}>
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
