import OccupantSummaryForm from "../OccupantSummaryForm";
import LeaseDetailsForm from "../LeaseDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantsForm from "../OtherOccupantsForm";

function ApplicationForm() {
  return (
    <div>
      <LeaseDetailsForm />
      <OccupantSummaryForm />
      <TenantDetailsForm />
      <OtherOccupantsForm />
    </div>
  );
}

export default ApplicationForm;
