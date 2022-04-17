import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
import { Employment } from "../types";
import { createEmployment } from "../utils";
import { EmploymentItem } from "./EmploymentItem";

interface Props {
  formikReference: string;
  data: Array<Employment>;
}

export function EmploymentHistoryFormSegment({ formikReference, data }: Props) {
  return (
    <div className="employmentHistoryFormSegment">
      <h3>Employment</h3>
      <FieldArrayFormSegment
        values={data}
        formikReference={`${formikReference}.employment`}
        initItem={createEmployment}
        buttonText="Employment"
      >
        {data.map((item, idx) => (
          <EmploymentItem
            formikReference={`${formikReference}[${idx}]`}
            key={idx}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
