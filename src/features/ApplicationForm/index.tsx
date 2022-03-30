import OccupantsSummaryForm from "./components/OccupantsSummaryForm";
import LeaseDetailsForm from "./components/LeaseDetailsForm";
import TenantDetailsForm from "./components/TenantsDetailsForm";
import OtherOccupantsForm from "./components/OtherOccupantsForm";

import useApplicationFormReducer from "./hooks/useApplicationFormReducer";

function ApplicationForm() {
  const [state, dispatch] = useApplicationFormReducer();
  const {
    leaseDetails,
    occupantsSummary,
    tenantDetails,
    otherOccupantsDetails,
    petDetails,
  } = state;

  return (
    <div>
      <LeaseDetailsForm initialValues={leaseDetails} dispatch={dispatch} />
      <OccupantsSummaryForm
        initialValues={occupantsSummary}
        dispatch={dispatch}
      />
      <TenantDetailsForm initialValues={tenantDetails} dispatch={dispatch} />
      <OtherOccupantsForm
        initialValues={otherOccupantsDetails}
        dispatch={dispatch}
      />
    </div>
  );
}

export default ApplicationForm;
