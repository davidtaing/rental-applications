import { useFormik } from "formik";
import LabledInput from "./common/LabledInput";

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
      <LabledInput
        id="fullname"
        name="fullname"
        type="text"
        labelText="Full Name:"
        onChange={formik.handleChange}
      />
      <label className="form-label" htmlFor="gender">
        Gender:
      </label>
      <select
        className="dropdown"
        id="gender"
        name="gender"
        onChange={formik.handleChange}
      >
        <option value="">Select a Value</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <LabledInput
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
