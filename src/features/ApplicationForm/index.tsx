import OccupantsForm from "../OccupantsForm";
import PropertyDetailsForm from "../PropertyDetailsForm";
import TenantDetailsForm from "../TenantDetailsForm";
import OtherOccupantsForm from "../OtherOccupantsForm";

function ApplicationForm() {
  return (
    <div>
      <PropertyDetailsForm />
      <OccupantsForm />
      <TenantDetailsForm />
      <OtherOccupantsForm />
    </div>
  );
}

export default ApplicationForm;
