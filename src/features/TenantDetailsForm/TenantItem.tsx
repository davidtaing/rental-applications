import { ChangeEventHandler, MouseEventHandler } from "react";

import LabelledInput from "../../components/common/LabelledInput";
import GenderSelect from "../../components/GenderSelect";
import EmploymentTypeSelect from "../../components/EmploymentTypeSelect";
import PayPeriodSelect from "../../components/PayPeriodSelect";
import PropertyHistoryList from "./PropertyHistoryList";
import PropertyHistory from "../../types/PropertyHistory";

interface TenantItemProps {
  index: number;
  propertyHistory: Array<PropertyHistory>;
  handleChange: ChangeEventHandler;
  onRemoveHandler: MouseEventHandler<HTMLButtonElement>;
}

function TenantItem({
  index,
  propertyHistory,
  handleChange,
  onRemoveHandler,
}: TenantItemProps) {
  return (
    <div className="tenant-item">
      <h2>Tenant</h2>
      <LabelledInput
        id="preferredName"
        name={`tenants[${index}].preferredName`}
        type="text"
        labelText="Preferred Name:"
        onChange={handleChange}
      />
      <LabelledInput
        id="fullname"
        name={`tenants[${index}].fullname`}
        type="text"
        labelText="Full Name:"
        onChange={handleChange}
      />
      <GenderSelect id="gender" name="gender" onChange={handleChange} />
      <LabelledInput
        id="dob"
        name={`tenants[${index}].dob`}
        type="date"
        labelText="Date Of Birth:"
        onChange={handleChange}
      />
      <LabelledInput
        id="phone"
        name={`tenants[${index}].phone`}
        type="text"
        labelText="Phone:"
        onChange={handleChange}
      />
      <LabelledInput
        id="mobile"
        name={`tenants[${index}].mobile`}
        type="text"
        labelText="Mobile:"
        onChange={handleChange}
      />
      <LabelledInput
        id="email"
        name={`tenants[${index}].email`}
        type="email"
        labelText="Email:"
        onChange={handleChange}
      />
      <h2>Rental History</h2>
      <PropertyHistoryList
        tenantIndex={index}
        propertyHistory={propertyHistory}
        onChangeHandler={handleChange}
      />

      <h2>Employment</h2>
      <LabelledInput
        id="employment-title"
        name={`tenants[${index}].employment.title`}
        type="text"
        labelText="Job Title:"
        onChange={handleChange}
      />
      <EmploymentTypeSelect
        id="employment-type"
        name={`tenants[${index}].employment.type`}
        onChange={handleChange}
      />
      <LabelledInput
        id="employment-net-income"
        name={`tenants[${index}].employment.netIncome`}
        type="number"
        labelText="Net Income:"
        onChange={handleChange}
      />
      <PayPeriodSelect
        id="employment-pay-period"
        name={`tenants[${index}].employment.payPeriod`}
        onChange={handleChange}
      />
      <h3>Reference</h3>
      <LabelledInput
        id="employment-reference-name"
        name={`tenants[${index}].employment.reference.name`}
        type="text"
        labelText="Name:"
        onChange={handleChange}
      />
      <LabelledInput
        id="employment-reference-position"
        name={`tenants[${index}].employment.reference.position`}
        type="text"
        labelText="Position:"
        onChange={handleChange}
      />
      <LabelledInput
        id="employment-reference-email"
        name={`tenants[${index}].employment.reference.email`}
        type="email"
        labelText="Email:"
        onChange={handleChange}
      />
      <LabelledInput
        id="employment-reference-phone"
        name={`tenants[${index}].employment.reference.phone`}
        type="text"
        labelText="Phone:"
        onChange={handleChange}
      />
      {index > 0 ? (
        <button onClick={onRemoveHandler}>Remove Tenant</button>
      ) : null}
    </div>
  );
}

export default TenantItem;
