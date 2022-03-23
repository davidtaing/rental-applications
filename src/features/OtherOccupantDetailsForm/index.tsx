import { Formik, Form, FieldArray } from "formik";
import LabelledInput from "../../components/common/LabelledInput";
import GenderSelect from "../../components/GenderSelect";

import OtherOccupant from "../../types/OtherOccupantInterface";

const newOccupant = (): OtherOccupant => ({ fullname: "", gender: "", age: 0 });
const initialValues = { occupants: new Array<OtherOccupant>() };

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
                    <div key={item.fullname} className="occupant-details">
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
                      <button onClick={() => arrayHelpers.remove(index)}>
                        Remove Occupant
                      </button>
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
