import LabelledSelect from "../../../components/common/LabelledSelect";
import { RentalStatus } from "../types";

interface Props {
  formikReference: string;
}

export function RentalStatusSelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      labelText="Status:"
      name={formikReference}
      values={Object.values(RentalStatus)}
    />
  );
}
