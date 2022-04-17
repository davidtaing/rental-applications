import LabelledSelect from "../../../components/common/LabelledSelect";
import { EmploymentType } from "../types";

interface Props {
  formikReference: string;
}

export function EmploymentTypeSelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      labelText="Type: "
      id="employmentType"
      name={formikReference}
      values={[
        EmploymentType.FULL_TIME,
        EmploymentType.PART_TIME,
        EmploymentType.CASUAL,
        EmploymentType.SELF_EMPLOYED,
        EmploymentType.CONTRACTOR,
      ]}
    />
  );
}
