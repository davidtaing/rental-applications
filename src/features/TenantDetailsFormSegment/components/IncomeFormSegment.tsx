import { EmploymentFormSegment } from "./EmploymentFormSegment";
import { IncomeSupportFormSegment } from "./IncomeSupportFormSegment";
import { RealEstateIncomeFormSegment } from "./RealEstateIncomeFormSegment";

interface Props {
  formikReference: string;
}

export function IncomeFormSegment({ formikReference }: Props) {
  return (
    <div className="incomeFormSegment">
      <EmploymentFormSegment formikReference={formikReference} />
      <IncomeSupportFormSegment formikReference={formikReference} />
      <RealEstateIncomeFormSegment formikReference={formikReference} />
    </div>
  );
}
