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
      <label className="form-label" htmlFor="preferredName">
        Preferred Name:
      </label>
      <label className="form-label" htmlFor="fullname">
        Full Name:
      </label>
      <label className="form-label" htmlFor="gender">
        Gender:
      </label>
      <label className="form-label" htmlFor="dob">
        Date Of Birth:
      </label>
      <label className="form-label" htmlFor="phone">
        Phone:
      </label>
      <label className="form-label" htmlFor="mobile">
        Mobile:
      </label>
      <label className="form-label" htmlFor="email">
        Email:
      </label>

      <h2>Rental History</h2>
      <label className="form-label" htmlFor="address">
        Address:
      </label>
      <label className="form-label" htmlFor="status">
        Rental Status:
      </label>
      <h3>Reference</h3>
      <label className="form-label" htmlFor="property-reference-name">
        Name:
      </label>
      <label className="form-label" htmlFor="property-reference-email">
        Email:
      </label>
      <label className="form-label" htmlFor="property-reference-phone">
        Phone:
      </label>

      <h2>Employment</h2>
      <label className="form-label" htmlFor="employment-title">
        Job Title:
      </label>
      <label className="form-label" htmlFor="employment-type">
        Type:
      </label>
      <label className="form-label" htmlFor="employment-net-income">
        Net Income:
      </label>
      <label className="form-label" htmlFor="employment-pay-period">
        Pay Period:
      </label>
      <h3>Reference</h3>
      <label className="form-label" htmlFor="employment-reference-name">
        Name:
      </label>
      <label className="form-label" htmlFor="employment-reference-position">
        Position:
      </label>
      <label className="form-label" htmlFor="employment-reference-email">
        Email:
      </label>
      <label className="form-label" htmlFor="employment-reference-phone">
        Phone:
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TenantDetailsForm;
