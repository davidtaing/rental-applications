import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
import LabelledInput from "../../../components/common/LabelledInput";
import { Employment } from "../types";
import { createEmployment } from "../utils";
import { EmploymentFormSegment } from "./EmploymentFormSegment";

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
        minItems={0}
      >
        {data.map((item, idx) => (
          <EmploymentFormSegment
            formikReference={`${formikReference}[${idx}]`}
            key={idx}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
