import { useFormik } from "formik";

function OccupantsForm() {
  const formik = useFormik({
    initialValues: {
      adults: 0,
      children: 0,
      dogs: 0,
      cats: 0,
      otherPets: 0,
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="adults">Adults: </label>
      <input id="adults" type="number" min="0" defaultValue="0" />
      <label htmlFor="children">Children: </label>
      <input id="children" type="number" min="0" defaultValue="0" />
      <label htmlFor="dogs">Dogs: </label>
      <input id="dogs" type="number" min="0" defaultValue="0" />
      <label htmlFor="cat">Cats: </label>
      <input id="cat" type="number" min="0" defaultValue="0" />
      <label htmlFor="otherPets">Other Pets: </label>
      <input id="otherPets" type="number" min="0" defaultValue="0" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OccupantsForm;
