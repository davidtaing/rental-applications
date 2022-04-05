import { useFormik } from "formik";

/**
 * Form for Pets
 */
function PetDetailsForm() {
  const formik = useFormik({
    initialValues: {
      type: "",
      age: 0,
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div></div>
    </form>
  );
}

export default PetDetailsForm;
