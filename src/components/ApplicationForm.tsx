import OccupantsForm from "./OccupantsForm";
import PropertyDetailsForm from "./PropertyDetailsForm";
import TenantDetailsForm from "./TenantDetailsForm";

function ApplicationForm() {
  return (
    <div>
      <PropertyDetailsForm />
      <OccupantsForm />
      <TenantDetailsForm />
    </div>
  );
}

export default ApplicationForm;
