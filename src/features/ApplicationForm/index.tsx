import OccupantSummaryForm from "./components/OccupantSummaryForm";
import LeaseDetailsForm from "./components/LeaseDetailsForm";
import TenantDetailsForm from "./components/TenantDetailsForm";
import OtherOccupantsForm from "./components/OtherOccupantsForm";

import useApplicationFormReducer from "./hooks/useApplicationFormReducer";

function ApplicationForm() {
  const [state, dispatch] = useApplicationFormReducer();
  const {
    leaseDetails,
    occupantsSummary,
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
