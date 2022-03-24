import { Formik, Form, FieldArray } from "formik";
import TenantDetails from "../../types/TenantDetailsInterface";
import TenantItem from "./TenantItem";

import { createTenant } from "../../utils";

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
            <FieldArray name="tenants">
              {(arrayHelpers) => (
                <div className="tenants-container">
                  {values.tenants.map((item, index) => (
                    <TenantItem
                      key={index}
                      index={index}
                      propertyHistory={item.propertyHistory}
                      onRemoveHandler={() => arrayHelpers.remove(index)}
                      handleChange={formik.handleChange}
                    />
                  ))}
                  <button onClick={() => arrayHelpers.push(createTenant())}>
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
