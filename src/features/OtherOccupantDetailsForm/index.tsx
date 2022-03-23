import { Formik, Form } from "formik";
import LabelledInput from "../../components/common/LabelledInput";
import GenderSelect from "../../components/GenderSelect";

const initialValues = { fullname: "", gender: "", age: 0 };

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
      {(formik) => (
        <Form>
          <h1>Other Occupants</h1>
          <LabelledInput
            id="fullname"
            name="fullname"
            type="text"
            labelText="Full Name:"
            onChange={formik.handleChange}
          />
          <GenderSelect onChange={formik.handleChange} />
          <LabelledInput
            id="age"
            name="age"
            type="number"
            min="0"
            labelText="Age:"
            onChange={formik.handleChange}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default OtherOccupantDetailsForm;
