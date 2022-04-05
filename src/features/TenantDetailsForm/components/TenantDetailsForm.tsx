import { Formik, Form } from "formik";
import { useApplicationFormCtx } from "../../ApplicationForm/contexts/ApplicationFormContext";
import { Actions } from "../../ApplicationForm/types/Actions";
import { TenantDetails } from "../../ApplicationForm/types/State";

import TenantsList from "./TenantsList";

/**
 * Form for Named Tenants,
 * i.e. Rent Paying Tenants
 */
function TenantDetailsForm() {
  const [{ tenantDetails }, dispatch] = useApplicationFormCtx();

  return (
    <Formik
      initialValues={tenantDetails}
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

export default TenantDetailsForm;
