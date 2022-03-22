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
      <h1>Occupants</h1>
      <label htmlFor="adults">Adults:</label>
      <input
        id="adults"
        name="adults"
        type="number"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <label htmlFor="children">Children:</label>
      <input
        id="children"
        name="chidlren"
        type="number"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <label htmlFor="dogs">Dogs:</label>
      <input
        id="dogs"
        name="dogs"
        type="number"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <label htmlFor="cat">Cats:</label>
      <input
        id="cat"
        name="cats"
        type="number"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <label htmlFor="otherPets">Other Pets:</label>
      <input
        id="otherPets"
        name="otherPets"
        type="number"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OccupantsForm;
