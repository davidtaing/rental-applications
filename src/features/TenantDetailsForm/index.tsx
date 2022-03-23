import { Formik, Form, FieldArray } from "formik";
import TenantDetails from "../../types/TenantDetailsInterface";
import TenantItem from "./TenantItem";

const createNewTenant = () => ({
  preferredName: "",
  fullname: "",
  gender: "",
  dob: new Date(), //TODO: convert to date
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
});

interface InitialValues {
  tenants: Array<TenantDetails>;
}

const initialValues: InitialValues = {
  tenants: [createNewTenant()],
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
      {(formik) => {
        const { values } = formik;

        return (
          <Form>
            <h1>Tenant</h1>
            <FieldArray name="tenants">
              {(arrayHelpers) => (
                <div className="tenants-container">
                  {values.tenants.map((item, index) => (
                    <TenantItem
                      key={item.fullname}
                      onRemoveHandler={() => arrayHelpers.remove(index)}
                      handleChange={formik.handleChange}
                      index={index}
                    />
                  ))}
                  <button onClick={() => arrayHelpers.push(createNewTenant())}>
                    Add Co-Tenant
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

export default TenantDetailsForm;
