import LabelledSelect from "../../../components/common/LabelledSelect";
import { RentalReferenceType } from "../types";

interface Props {
  formikReference: string;
}

export function RentalReferenceTypeSelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      id="rentalHistoryReferenceType"
      labelText="Type:"
      name={formikReference}
      values={Object.values(RentalReferenceType)}
    />
  );
}
