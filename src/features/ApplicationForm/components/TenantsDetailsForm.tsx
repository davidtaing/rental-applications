import { Formik, Form } from "formik";

import TenantsList from "./TenantsList";

import Tenant from "../types/Tenant";
import { ApplicationFormDispatch } from "../types/Dispatch";
import { TenantDetails } from "../types/State";
import { Actions } from "../types/Actions";

interface TenantsDetailsFormProps {
  initialValues: { tenants: Array<Tenant> };
  dispatch: ApplicationFormDispatch;
}

/**
 * Form for Named Tenants,
 * i.e. Rent Paying Tenants
 */
function TenantsDetailsForm({
  initialValues,
  dispatch,
}: TenantsDetailsFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => {
        const { values } = formik;
        const onSubmitHandler = (values: TenantDetails) =>
          dispatch({
            type: Actions.update,
            payload: { tenantDetails: values },
          });

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

export default TenantsDetailsForm;
