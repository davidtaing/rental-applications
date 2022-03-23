import OccupantSummaryForm from "../OccupantSummaryForm";
import PropertyDetailsForm from "../PropertyDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantsForm from "../OtherOccupantsForm";

function ApplicationForm() {
  return (
    <div>
      <PropertyDetailsForm />
      <OccupantSummaryForm />
      <TenantDetailsForm />
      <OtherOccupantsForm />
    </div>
  );
}

export default ApplicationForm;
