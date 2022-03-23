import { Formik, Form, FieldArray } from "formik";
import LabelledInput from "../../components/common/LabelledInput";
import GenderSelect from "../../components/GenderSelect";

const newOccupant = () => ({ fullname: "", gender: "", age: 0 });
const initialValues = { occupants: [newOccupant()] };

/**
 * Form for Other Adults and Children,
 * i.e. Non-Rent Paying Adults and Children
 */
function OtherOccupantDetailsForm() {
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
                    <div
                      key={`occupants[${index}].fullname`}
                      className="occupant-details"
                    >
                      <LabelledInput
                        id="fullname"
                        name={`occupants[${index}].fullname`}
                        type="text"
                        labelText="Full Name:"
                        onChange={formik.handleChange}
                      />
                      <GenderSelect
                        id="gender"
                        name={`occupants[${index}].gender`}
                        onChange={formik.handleChange}
                      />
                      <LabelledInput
                        id="age"
                        name={`occupants[${index}].age`}
                        type="number"
                        min="0"
                        labelText="Age:"
                        onChange={formik.handleChange}
                      />
                    </div>
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

export default OtherOccupantDetailsForm;
