import { Formik, Form, FieldArray } from "formik";
import TenantDetails from "../../types/TenantInterface";
import TenantItem from "./TenantItem";

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
          <Form>
            <h1>Tenant</h1>
            <TenantsList
              values={values.tenants}
              onChangeHandler={formik.handleChange}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default TenantDetailsForm;
