import { useFormik } from "formik";

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
      <label htmlFor="address">Address: </label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
      />
      <label htmlFor="rent">Rent Amount (Per Week):</label>
      <input
        id="rent"
        name="rent"
        type="number"
        min="0"
        onChange={formik.handleChange}
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        id="startDate"
        name="startDate"
        type="date"
        onChange={formik.handleChange}
      />
      <label htmlFor="leasePeriod">Lease Period (Months):</label>
      <input
        id="leasePeriod"
        name="leasePeriod"
        type="number"
        min="0"
        defaultValue="12"
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PropertyDetailsForm;
