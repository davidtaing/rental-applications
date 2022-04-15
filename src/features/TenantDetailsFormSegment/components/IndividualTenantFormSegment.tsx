import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";

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
        id="fullname"
        name={`${formikReference}.fullname`}
        type="text"
      />
      {/* Gender */}
      <LabelledSelect
        labelText="Gender: "
        id="gender"
        name={`${formikReference}.gender`}
        values={["Male", "Female", "Other"]}
      />
      {/* Date of Birth */}
      <LabelledInput
        labelText="Date of Birth:"
        id="dob"
        name={`${formikReference}.dob`}
        type="date"
      />
      {/* Mobile */}
      <LabelledInput
        labelText="Mobile:"
        id="mobile"
        name={`${formikReference}.mobile`}
        type="text"
      />
      {/* Phone */}
      <LabelledInput
        labelText="Phone:"
        id="phone"
        name={`${formikReference}.phone`}
        type="text"
      />
      {/* Email */}
      <LabelledInput
        labelText="Email:"
        id="email"
        name={`${formikReference}.email`}
        type="email"
      />
    </div>
  );
}
