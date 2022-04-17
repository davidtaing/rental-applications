import { Formik, Form } from "formik";
import { ApplicationFormState } from "../types";
import { validationSchema } from "../utils";
import { initLeaseDetailsFormState } from "../../LeaseDetailsFormSegment/utils";
import { initTenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { initOtherOccupantsFormState } from "../../OtherOccupantsFormSegment";
import { initPetsFormState } from "../../PetsFormSegment";

export interface Props {
  initialValues?: Partial<ApplicationFormState>;
  children: React.ReactNode;
}

// combine individual state initializers
const initialState = {
  ...initLeaseDetailsFormState(),
  ...initTenantDetailsFormState(),
  ...initOtherOccupantsFormState(),
  ...initPetsFormState(),
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
