import LabelledInput from "../../../components/common/LabelledInput";
import { PaymentFrequencySelect } from "../../../components/common/PaymentFrequencySelect";

export interface EmploymentItemProps {
  formikReference: string;
}

export function EmploymentItem({ formikReference }: EmploymentItemProps) {
  return (
    <div className="individualEmployment">
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
      <PaymentFrequencySelect
        formikReference={`${formikReference}.employment.frequency`}
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
