import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
import { IncomeSupport } from "../types";
import { createIncomeSupport } from "../utils";
import { IncomeSupportItem } from "./IncomeSupportItem";

interface Props {
  formikReference: string;
  data: Array<IncomeSupport>;
}

export function IncomeSupportFormSegment({ formikReference, data }: Props) {
  return (
    <div className="incomeSupportFormSegment">
      <h3>Income Support</h3>
      <FieldArrayFormSegment
        values={data}
        formikReference={`${formikReference}.incomeSupport`}
        initItem={createIncomeSupport}
        buttonText="Income Support"
      >
        {data.map((item, idx) => (
          <IncomeSupportItem
            formikReference={`${formikReference}[${idx}]`}
            key={idx}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
