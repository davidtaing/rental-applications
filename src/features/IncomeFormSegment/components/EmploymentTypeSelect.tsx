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
      values={Object.values(EmploymentType)}
    />
  );
}
