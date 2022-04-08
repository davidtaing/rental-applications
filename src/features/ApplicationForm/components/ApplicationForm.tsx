import { Formik, Form } from "formik";

interface Props {
  initialValues?: any;
  children: React.ReactNode;
}

export function ApplicationForm({ initialValues = {}, children }: Props) {
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
