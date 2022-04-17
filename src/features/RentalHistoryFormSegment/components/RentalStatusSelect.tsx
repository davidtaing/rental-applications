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
      values={[
        RentalStatus.AGENCY_RENTAL,
        RentalStatus.PRIVATE_RENTAL,
        RentalStatus.LIVING_WITH_PARENTS,
        RentalStatus.LIVING_IN_OWN_PROPERTY,
        RentalStatus.SHARING,
        RentalStatus.CURRENTLY_OVERSEAS,
        RentalStatus.JUST_ARRIVED_FROM_OVERSEAS,
        RentalStatus.OTHER,
      ]}
    />
  );
}
