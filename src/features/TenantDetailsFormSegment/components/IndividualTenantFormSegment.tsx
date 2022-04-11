import LabelledInput from "../../../components/common/LabelledInput";
import LabelledSelect from "../../../components/common/LabelledSelect";

interface Props {
  index: string;
}

/**
 * Form Segments for Individual Tenants
 * @param index reference to formik values in tenant[index]
 */
export function IndividualTenantFormSegment({ index }: Props) {
  return (
    <div className="individualTenantFormSegment">
      {/* Full Name */}
      <LabelledInput
        labelText="Full Name:"
        id="fullname"
        name={`tenants${index}.fullname`}
        type="text"
      />
      {/* Gender */}
      <LabelledSelect
        labelText="Gender: "
        id="gender"
        name={`tenants${index}.gender`}
        values={["Male", "Female", "Other"]}
      />
      {/* Date of Birth */}
      <LabelledInput
        labelText="Date of Birth:"
        id="dob"
        name={`tenants${index}.dob`}
        type="date"
      />
      {/* Mobile */}
      <LabelledInput
        labelText="Mobile:"
        id="mobile"
        name={`tenants${index}.mobile`}
        type="text"
      />
      {/* Phone */}
      <LabelledInput
        labelText="Phone:"
        id="phone"
        name={`tenants${index}.phone`}
        type="text"
      />
      {/* Email */}
      <LabelledInput
        labelText="Email:"
        id="email"
        name={`tenants${index}.email`}
        type="email"
      />
    </div>
  );
}
