import { MouseEventHandler } from "react";

import LabelledInput from "../../components/common/LabelledInput";
import GenderSelect from "../../components/GenderSelect";
import EmploymentTypeSelect from "../../components/EmploymentTypeSelect";
import PayPeriodSelect from "../../components/PayPeriodSelect";
import PropertyHistoryList from "./PropertyHistoryList";
import PropertyHistory from "../../types/PropertyHistory";

interface TenantItemProps {
  index: number;
  propertyHistory: Array<PropertyHistory>;
  onRemoveHandler: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Form Segment for Individual Tenant
 */
function TenantItem({
  index,
  propertyHistory,
  onRemoveHandler,
}: TenantItemProps) {
  return (
    <div className="tenant-list--item">
      <h2>Tenant</h2>
      <LabelledInput
        id="preferredName"
        name={`tenants[${index}].preferredName`}
        type="text"
        labelText="Preferred Name:"
      />
      <LabelledInput
        id="fullname"
        name={`tenants[${index}].fullname`}
        type="text"
        labelText="Full Name:"
      />
      <GenderSelect id="gender" name="gender" />
      <LabelledInput
        id="dob"
        name={`tenants[${index}].dob`}
        type="date"
        labelText="Date Of Birth:"
      />
      <LabelledInput
        id="phone"
        name={`tenants[${index}].phone`}
        type="text"
        labelText="Phone:"
      />
      <LabelledInput
        id="mobile"
        name={`tenants[${index}].mobile`}
        type="text"
        labelText="Mobile:"
      />
      <LabelledInput
        id="email"
        name={`tenants[${index}].email`}
        type="email"
        labelText="Email:"
      />
      <h2>Rental History</h2>
      <PropertyHistoryList
        tenantIndex={index}
        propertyHistory={propertyHistory}
      />

      <h2>Employment</h2>
      <LabelledInput
        id="employment-title"
        name={`tenants[${index}].employment.title`}
        type="text"
        labelText="Job Title:"
      />
      <EmploymentTypeSelect
        id="employment-type"
        name={`tenants[${index}].employment.type`}
      />
      <LabelledInput
        id="employment-net-income"
        name={`tenants[${index}].employment.netIncome`}
        type="number"
        labelText="Net Income:"
      />
      <PayPeriodSelect
        id="employment-pay-period"
        name={`tenants[${index}].employment.payPeriod`}
      />
      <h3>Reference</h3>
      <LabelledInput
        id="employment-reference-name"
        name={`tenants[${index}].employment.reference.name`}
        type="text"
        labelText="Name:"
      />
      <LabelledInput
        id="employment-reference-position"
        name={`tenants[${index}].employment.reference.position`}
        type="text"
        labelText="Position:"
      />
      <LabelledInput
        id="employment-reference-email"
        name={`tenants[${index}].employment.reference.email`}
        type="email"
        labelText="Email:"
      />
      <LabelledInput
        id="employment-reference-phone"
        name={`tenants[${index}].employment.reference.phone`}
        type="text"
        labelText="Phone:"
      />
      {index > 0 ? (
        <button onClick={onRemoveHandler}>Remove Tenant</button>
      ) : null}
    </div>
  );
}

export default TenantItem;
