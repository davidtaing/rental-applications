import { EmploymentFormSegment } from "./EmploymentFormSegment";
import { IncomeSupportFormSegment } from "./IncomeSupportFormSegment";

interface Props {
  formikReference: string;
}

export function IncomeFormSegment({ formikReference }: Props) {
  return (
    <div className="incomeFormSegment">
      <EmploymentFormSegment formikReference={formikReference} />
      <IncomeSupportFormSegment formikReference={formikReference} />
    </div>
  );
}
