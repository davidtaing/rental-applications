import { useFormik } from "formik";
import LabelledInput from "./common/LabelledInput";
import GenderSelect from "./GenderSelect";

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
      <LabelledInput
        className="text-input"
        id="preferredName"
        name="preferredName"
        type="text"
        labelText="Preferred Name:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="fullname"
        name="fullname"
        type="text"
        labelText="Full Name:"
        onChange={formik.handleChange}
      />
      <GenderSelect onChange={formik.handleChange} />
      <LabelledInput
        className="date-input"
        id="dob"
        name="dob"
        type="date"
        labelText="Date Of Birth:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="phone"
        name="phone"
        type="text"
        labelText="Phone:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="mobile"
        name="mobile"
        type="text"
        labelText="Mobile:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="email-input"
        id="email"
        name="email"
        type="email"
        labelText="Email:"
        onChange={formik.handleChange}
      />
      <h2>Rental History</h2>
      <LabelledInput
        className="text-input"
        id="property-address"
        name="property.address"
        type="text"
        labelText="Address:"
        onChange={formik.handleChange}
      />
      <label className="form-label" htmlFor="property-status">
        Rental Status:
      </label>
      <select
        className="dropdown"
        id="property-status"
        name="property.status"
        onChange={formik.handleChange}
      >
        <option value="">Select a Value</option>
        <option value="Renting with Agency">Renting with Agency</option>
        <option value="Renting with Private Landlord">
          Renting with Private Landlord
        </option>
        <option value="House/Room Share">House/Room Share</option>
        <option value="Living with Parents">Living with Parents</option>
        <option value="Living in Own Property">Living in Own Property</option>
        <option value="Just Arrived From Overseas">
          Just Arrived From Overseas
        </option>
        <option value="Living Overseas">Living Overseas</option>
      </select>
      <h3>Reference</h3>
      <LabelledInput
        className="text-input"
        id="property-reference-name"
        name="property.reference.name"
        type="text"
        labelText="Name:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="property-reference-email"
        name="property.reference.email"
        type="email"
        labelText="Email:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="property-reference-phone"
        name="property.reference.phone"
        type="text"
        labelText="Phone:"
        onChange={formik.handleChange}
      />

      <h2>Employment</h2>
      <LabelledInput
        className="text-input"
        id="employment-title"
        name="employment.title"
        type="text"
        labelText="Job Title:"
        onChange={formik.handleChange}
      />
      <label className="form-label" htmlFor="employment-type">
        Type:
      </label>
      <select
        className="dropdown"
        id="employment-type"
        name="employment.type"
        onChange={formik.handleChange}
      >
        <option value="">Select a Value</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Casual">Casual</option>
        <option value="Self-Employed">Self-Employed</option>
      </select>
      <LabelledInput
        className="text-input"
        id="employment-net-income"
        name="employment.netIncome"
        type="number"
        labelText="Net Income:"
        onChange={formik.handleChange}
      />
      <label className="form-label" htmlFor="employment-pay-period">
        Pay Period:
      </label>
      <select
        className="dropdown"
        id="employment-pay-period"
        name="employment.payPeriod"
        onChange={formik.handleChange}
      >
        <option value="">Select a Value</option>
        <option value="Weekly">Weekly</option>
        <option value="Fortnightly">Fortnightly</option>
        <option value="Monthly">Monthly</option>
      </select>
      <h3>Reference</h3>
      <LabelledInput
        className="text-input"
        id="employment-reference-name"
        name="employment.reference.name"
        type="text"
        labelText="Name:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="employment-reference-position"
        name="employment.reference.position"
        type="text"
        labelText="Position:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="employment-reference-email"
        name="employment.reference.email"
        type="email"
        labelText="Email:"
        onChange={formik.handleChange}
      />
      <LabelledInput
        className="text-input"
        id="employment-reference-phone"
        name="employment.reference.phone"
        type="text"
        labelText="Phone:"
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TenantDetailsForm;
