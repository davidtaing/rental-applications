import { Formik, Form } from "formik";
import LabelledInput from "../../../components/common/LabelledInput";
import { Actions } from "../types/Actions";
import { ApplicationFormDispatch } from "../types/dispatch";
import { OccupantsSummary } from "../types/State";

interface OccupantsSummaryFormProps {
  initialValues: OccupantsSummary;
  dispatch: ApplicationFormDispatch;
}

function OccupantsSummaryForm({
  initialValues,
  dispatch,
}: OccupantsSummaryFormProps) {
  const onSubmitHandler = (values: OccupantsSummary) =>
    dispatch({ type: Actions.update, payload: { occupantsSummary: values } });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
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
