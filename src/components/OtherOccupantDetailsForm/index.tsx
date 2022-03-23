import { useFormik } from "formik";
import LabelledInput from "../common/LabelledInput";
import GenderSelect from "../GenderSelect";

/**
 * Form for Other Adults and Children,
 * i.e. Non-Rent Paying Adults and Children
 */
function OtherOccupantDetailsForm() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      gender: "",
      age: 0,
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
    </form>
  );
}

export default OtherOccupantDetailsForm;
