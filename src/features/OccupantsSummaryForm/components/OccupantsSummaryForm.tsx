import { Formik, Form } from "formik";
import LabelledInput from "../../../components/common/LabelledInput";
import { useApplicationFormCtx } from "../../ApplicationForm/contexts/ApplicationFormContext";
import { Actions } from "../../ApplicationForm/types/Actions";
import { OccupantsSummary } from "../../ApplicationForm/types/State";

function OccupantsSummaryForm() {
  const [{ occupantsSummary }, dispatch] = useApplicationFormCtx();

  const onSubmitHandler = (values: OccupantsSummary) =>
    dispatch({ type: Actions.update, payload: { occupantsSummary: values } });

  return (
    <Formik initialValues={occupantsSummary} onSubmit={onSubmitHandler}>
      {(formik) => (
        <Form>
          <h1>Occupants</h1>
          <LabelledInput
            id="adults"
            name="adults"
            type="number"
            labelText="Adults:"
            min="0"
            defaultValue="0"
          />
          <LabelledInput
            id="children"
            name="chidlren"
            type="number"
            labelText="Children:"
            min="0"
            defaultValue="0"
          />
          <LabelledInput
            id="dogs"
            name="dogs"
            type="number"
            labelText="Dogs:"
            min="0"
            defaultValue="0"
          />
          <LabelledInput
            id="cat"
            name="cats"
            type="number"
            labelText="Cats:"
            min="0"
            defaultValue="0"
          />
          <LabelledInput
            id="otherPets"
            name="otherPets"
            type="number"
            labelText="Other Pets:"
            min="0"
            defaultValue="0"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default OccupantsSummaryForm;
