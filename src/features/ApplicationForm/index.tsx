import OccupantSummaryForm from "../OccupantSummaryForm";
import LeaseDetailsForm from "../LeaseDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantsForm from "../OtherOccupantsForm";
import useApplicationFormReducer from "./hooks/useApplicationFormReducer";

function ApplicationForm() {
  const [state, dispatch] = useApplicationFormReducer();
  const {
    leaseDetails,
    occupantSummary,
    tenantDetails,
    otherOccupantDetails,
    petDetails,
  } = state;

  return (
    <div>
      <LeaseDetailsForm initialValues={leaseDetails} dispatch={dispatch} />
      <OccupantSummaryForm />
      <TenantDetailsForm />
      <OtherOccupantsForm />
    </div>
  );
}

export default ApplicationForm;
