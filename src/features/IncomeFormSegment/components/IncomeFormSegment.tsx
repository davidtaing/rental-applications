import { Tenant } from "../../TenantDetailsFormSegment";
import { EmploymentFormSegment } from "./EmploymentFormSegment";
import { IncomeSupportFormSegment } from "./IncomeSupportFormSegment";
import { RealEstateIncomeFormSegment } from "./RealEstateIncomeFormSegment";

interface Props {
  formikReference: string;
  tenantData: Tenant;
}

export function IncomeFormSegment({ formikReference, tenantData }: Props) {
  const { employment, incomeSupport, realEstateIncome } = tenantData;

  return (
    <div className="incomeFormSegment">
      <EmploymentFormSegment
        formikReference={formikReference}
        data={employment}
      />
      <IncomeSupportFormSegment
        formikReference={formikReference}
        data={incomeSupport}
      />
      <RealEstateIncomeFormSegment
        formikReference={formikReference}
        data={realEstateIncome}
      />
    </div>
  );
}
