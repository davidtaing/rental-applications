import LabelledInput from "../../../components/common/LabelledInput";
import { Employment } from "../types";

interface Props {
  formikReference: string;
  data: Array<Employment>;
}

export function EmploymentFormSegment({ formikReference, data }: Props) {
  return (
    <div className="employmentFormSegment">
      <h3>Employment</h3>
      <LabelledInput
        labelText="Title:"
        id="employmentTitle"
        name={`${formikReference}.employment.title`}
        type="text"
      />
      <LabelledInput
        labelText="Company:"
        id="employmentCompany"
        name={`${formikReference}.employment.company`}
        type="text"
      />
      <LabelledInput
        labelText="Type:"
        id="employmentType"
        name={`${formikReference}.employment.type`}
        type="text"
      />
      <LabelledInput
        labelText="Amount:"
        id="employmentAmount"
        name={`${formikReference}.employment.amount`}
        type="number"
      />
      <LabelledInput
        labelText="Frequency:"
        id="employmentFrequency"
        name={`${formikReference}.employment.frequency`}
        type="text"
      />
      <div>
        <h4>Reference</h4>
        <LabelledInput
          labelText="Name:"
          id="referenceName"
          name={`${formikReference}.employment.reference.name`}
          type="text"
        />
        <LabelledInput
          labelText="Position:"
          id="referencePosition"
          name={`${formikReference}.employment.reference.position`}
          type="text"
        />
        <LabelledInput
          labelText="Phone:"
          id="referencePhone"
          name={`${formikReference}.employment.reference.phone`}
          type="text"
        />
        <LabelledInput
          labelText="Email:"
          id="referenceEmail"
          name={`${formikReference}.employment.reference.email`}
          type="text"
        />
      </div>
    </div>
  );
}
