import { useFormik } from "formik";
import LabelledInput from "../common/LabelledInput";

function PropertyDetailsForm() {
  const formik = useFormik({
    initialValues: {
      address: "",
      rent: 0,
      startDate: Date(),
      leasePeriod: 12,
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Property Details</h1>
      <LabelledInput
        id="address"
        name="address"
        type="text"
        labelText="Address:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="rent"
        name="rent"
        type="number"
        labelText="Rent Amount (Per Week):"
        min="0"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="startDate"
        name="startDate"
        type="date"
        labelText="Start Date:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="leasePeriod"
        name="leasePeriod"
        type="number"
        labelText="Lease Period (Months):"
        min="0"
        defaultValue="12"
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PropertyDetailsForm;
