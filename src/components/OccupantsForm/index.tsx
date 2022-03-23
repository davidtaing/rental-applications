import { useFormik } from "formik";
import LabelledInput from "../common/LabelledInput";

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
      <LabelledInput
        id="adults"
        name="adults"
        type="number"
        labelText="Adults:"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="children"
        name="chidlren"
        type="number"
        labelText="Children:"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="dogs"
        name="dogs"
        type="number"
        labelText="Dogs:"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="cat"
        name="cats"
        type="number"
        labelText="Cats:"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <LabelledInput
        id="otherPets"
        name="otherPets"
        type="number"
        labelText="Other Pets:"
        min="0"
        defaultValue="0"
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OccupantsForm;
