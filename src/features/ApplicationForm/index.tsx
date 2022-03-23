import OccupantsForm from "../OccupantsForm";
import PropertyDetailsForm from "../PropertyDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantDetailsForm from "../OtherOccupantDetailsForm";

function ApplicationForm() {
  return (
    <div>
      <PropertyDetailsForm />
      <OccupantsForm />
      <TenantDetailsForm />
      <OtherOccupantDetailsForm />
    </div>
  );
}

export default ApplicationForm;
