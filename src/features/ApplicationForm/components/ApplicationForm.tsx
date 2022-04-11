import { Formik, Form } from "formik";
import { ApplicationFormState } from "../types";
import { validationSchema } from "../utils";
import { initLeaseDetailsState } from "../../LeaseDetailsFormSegment/utils";
import { initTenantDetailsState } from "../../TenantDetailsFormSegment";

interface Props {
  initialValues?: ApplicationFormState;
  children: React.ReactNode;
}

const initialState = {
  ...initLeaseDetailsState(),
  ...initTenantDetailsState(),
};

export function ApplicationForm({
  initialValues = initialState,
  children,
}: Props) {
  const handleSubmit = (values: typeof initialValues) =>
    alert(JSON.stringify(values, null, 2));

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validatationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => <Form>{children}</Form>}
      </Formik>
    </div>
  );
}
