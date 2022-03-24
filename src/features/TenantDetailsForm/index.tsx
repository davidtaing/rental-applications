import { Formik, Form } from "formik";
import TenantDetails from "../../types/TenantInterface";

import { createTenant } from "../../utils";
import TenantsList from "./TenantsList";

interface InitialValues {
  tenants: Array<TenantDetails>;
}

const initialValues: InitialValues = {
  tenants: [createTenant()],
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
          <Form className="form tenant-details-form">
            <h1>Tenant</h1>
            <TenantsList values={values.tenants} />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default TenantDetailsForm;
