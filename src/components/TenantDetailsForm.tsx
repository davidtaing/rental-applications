import { useFormik } from "formik";

/**
 * Form for Named Tenants,
 * i.e. Rent Paying Tenants
 */
function TenantDetailsForm() {
  const formik = useFormik({
    initialValues: {
      preferredName: "",
      fullname: "",
      gender: "",
      dob: "", //TODO: convert to date
      phone: "",
      mobile: "",
      email: "",
      rentalHistory: {
        address: "",
        status: "",
        reference: {
          name: "",
          email: "",
          phone: "",
        },
      },
      employment: {
        title: "",
        type: "",
        netIncome: 0,
        payPeriod: "",
        reference: {
          name: "",
          position: "",
          email: "",
          phone: "",
        },
      },
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Tenant</h1>
      <label htmlFor="preferredName">Preferred Name:</label>
      <label htmlFor="fullname">Full Name:</label>
      <label htmlFor="gender">Gender:</label>
      <label htmlFor="dob">Date Of Birth:</label>
      <label htmlFor="phone">Phone:</label>
      <label htmlFor="mobile">Mobile:</label>
      <label htmlFor="email">Email:</label>

      <h2>Rental History</h2>
      <label htmlFor="address">Address:</label>
      <label htmlFor="status">Rental Status:</label>
      <h3>Reference</h3>
      <label htmlFor="property-reference-name">Name:</label>
      <label htmlFor="property-reference-email">Email:</label>
      <label htmlFor="property-reference-phone">Phone:</label>

      <h2>Employment</h2>
      <label htmlFor="employment-title">Job Title:</label>
      <label htmlFor="employment-type">Type:</label>
      <label htmlFor="employment-net-income">Net Income:</label>
      <label htmlFor="employment-pay-period">Pay Period:</label>
      <h3>Reference</h3>
      <label htmlFor="employment-reference-name">Name:</label>
      <label htmlFor="employment-reference-position">Position:</label>
      <label htmlFor="employment-reference-email">Email:</label>
      <label htmlFor="employment-reference-phone">Phone:</label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TenantDetailsForm;
