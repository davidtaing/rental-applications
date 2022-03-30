import { Formik, Form } from "formik";
import LabelledInput from "../../components/common/LabelledInput";
import { Actions } from "../ApplicationForm";

const initialValues = {
  address: "",
  rent: 0,
  startDate: Date(),
  leasePeriod: 12,
};

function LeaseDetailsForm({ initialValues, dispatch }: any) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) =>
        dispatch({ type: Actions.update, payload: { leaseDetails: values } })
      }
    >
      {(formik) => (
        <Form>
          <h1>Property Details</h1>
          <LabelledInput
            id="address"
            name="address"
            type="text"
            labelText="Address:"
          />
          <LabelledInput
            id="rent"
            name="rent"
            type="number"
            labelText="Rent Amount (Per Week):"
            min="0"
          />
          <LabelledInput
            id="startDate"
            name="startDate"
            type="date"
            labelText="Start Date:"
          />
          <LabelledInput
            id="leasePeriod"
            name="leasePeriod"
            type="number"
            labelText="Lease Period (Months):"
            min="0"
            defaultValue="12"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default LeaseDetailsForm;
