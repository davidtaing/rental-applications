import { Formik, Form } from "formik";

import TenantsList from "./TenantsList";

import Tenant from "../types/Tenant";
import { createTenant } from "../utils";

interface InitialValues {
  tenants: Array<Tenant>;
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