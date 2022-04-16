import { GenderSelect } from "../../../components/common/GenderSelect";
import LabelledInput from "../../../components/common/LabelledInput";
import { IncomeFormSegment } from "../../IncomeFormSegment";

interface Props {
  formikReference: string;
}

/**
 * Form Segments for Individual Tenants
 */
export function IndividualTenantFormSegment({ formikReference }: Props) {
  return (
    <div className="individualTenantFormSegment">
      {/* Full Name */}
      <LabelledInput
        labelText="Full Name:"
        id="tenantFullname"
        name={`${formikReference}.fullname`}
        type="text"
      />
      {/* Gender */}
      <GenderSelect formikReference={`${formikReference}.gender`} />
      {/* Date of Birth */}
      <LabelledInput
        labelText="Date of Birth:"
        id="tenantDob"
        name={`${formikReference}.dob`}
        type="date"
      />
      {/* Mobile */}
      <LabelledInput
        labelText="Mobile:"
        id="tenantMobile"
        name={`${formikReference}.mobile`}
        type="text"
      />
      {/* Phone */}
      <LabelledInput
        labelText="Phone:"
        id="tenantPhone"
        name={`${formikReference}.phone`}
        type="text"
      />
      {/* Email */}
      <LabelledInput
        labelText="Email:"
        id="tenantEmail"
        name={`${formikReference}.email`}
        type="email"
      />

      <IncomeFormSegment formikReference={formikReference} />
    </div>
  );
}
