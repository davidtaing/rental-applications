import { useFormik } from "formik";

/**
 * Form for Other Adults,
 * i.e. Non-Rent Paying Tenants
 */
function OtherAdultsForm() {
  const formik = useFormik({
    initialValues: {
      preferredName: "",
      fullname: "",
      gender: "",
      dob: "", //TODO: convert to date
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div></div>
    </form>
  );
}

export default OtherAdultsForm;
