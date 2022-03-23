import { Formik, Form } from "formik";
import LabelledInput from "../../components/common/LabelledInput";
import EmploymentTypeSelect from "../../components/EmploymentTypeSelect";
import GenderSelect from "../../components/GenderSelect";
import PayPeriodSelect from "../../components/PayPeriodSelect";
import RentalStatusSelect from "../../components/RentalStatusSelect";

const initialValues = {
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
};

/**
 * Form for Named Tenants,
 * i.e. Rent Paying Tenants
 */
function TenantDetailsForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form>
          <h1>Tenant</h1>
          <LabelledInput
            id="preferredName"
            name="preferredName"
            type="text"
            labelText="Preferred Name:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="fullname"
            name="fullname"
            type="text"
            labelText="Full Name:"
            onChange={formik.handleChange}
          />
          <GenderSelect onChange={formik.handleChange} />
          <LabelledInput
            id="dob"
            name="dob"
            type="date"
            labelText="Date Of Birth:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="phone"
            name="phone"
            type="text"
            labelText="Phone:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="mobile"
            name="mobile"
            type="text"
            labelText="Mobile:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="email"
            name="email"
            type="email"
            labelText="Email:"
            onChange={formik.handleChange}
          />
          <h2>Rental History</h2>
          <LabelledInput
            id="property-address"
            name="property.address"
            type="text"
            labelText="Address:"
            onChange={formik.handleChange}
          />
          <RentalStatusSelect
            id="property-status"
            name="property.status"
            onChange={formik.handleChange}
          />
          <h3>Reference</h3>
          <LabelledInput
            id="property-reference-name"
            name="property.reference.name"
            type="text"
            labelText="Name:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="property-reference-email"
            name="property.reference.email"
            type="email"
            labelText="Email:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="property-reference-phone"
            name="property.reference.phone"
            type="text"
            labelText="Phone:"
            onChange={formik.handleChange}
          />

          <h2>Employment</h2>
          <LabelledInput
            id="employment-title"
            name="employment.title"
            type="text"
            labelText="Job Title:"
            onChange={formik.handleChange}
          />
          <EmploymentTypeSelect
            id="employment-type"
            name="employment.type"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="employment-net-income"
            name="employment.netIncome"
            type="number"
            labelText="Net Income:"
            onChange={formik.handleChange}
          />
          <PayPeriodSelect
            id="employment-pay-period"
            name="employment.payPeriod"
            onChange={formik.handleChange}
          />
          <h3>Reference</h3>
          <LabelledInput
            id="employment-reference-name"
            name="employment.reference.name"
            type="text"
            labelText="Name:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="employment-reference-position"
            name="employment.reference.position"
            type="text"
            labelText="Position:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="employment-reference-email"
            name="employment.reference.email"
            type="email"
            labelText="Email:"
            onChange={formik.handleChange}
          />
          <LabelledInput
            id="employment-reference-phone"
            name="employment.reference.phone"
            type="text"
            labelText="Phone:"
            onChange={formik.handleChange}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default TenantDetailsForm;
