import { Formik, Form } from "formik";
import { ApplicationFormState } from "../types";
import { initLeaseDetailsState } from "../../LeaseDetailsFormSegment/utils";

interface Props {
  initialValues: ApplicationFormState;
  children: React.ReactNode;
}

const initialState = initLeaseDetailsState();

export function ApplicationForm({
  initialValues = initialState,
  children,
}: Props) {
  const handleSubmit = (values: typeof initialValues) =>
    alert(JSON.stringify(values, null, 2));

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => <Form>{children}</Form>}
      </Formik>
    </div>
  );
}
