import { ChangeEventHandler, MouseEventHandler } from "react";
import LabelledInput from "../../components/common/LabelledInput";
import RentalStatusSelect from "../../components/RentalStatusSelect";

interface PropertyHistoryItemProps {
  tenantIndex: number;
  index: number;
  onChangeHandler: ChangeEventHandler;
  onRemoveHandler: MouseEventHandler<HTMLButtonElement>;
}
export function PropertyHistoryItem({
  tenantIndex,
  index,
  onChangeHandler,
  onRemoveHandler,
}: PropertyHistoryItemProps) {
  return (
    <div className="property-listitem">
      <h2>Property</h2>
      <LabelledInput
        id="property-address"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].address`}
        type="text"
        labelText="Address:"
        onChange={onChangeHandler}
      />
      <RentalStatusSelect
        id="property-status"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].status`}
        onChange={onChangeHandler}
      />
      <h3>Reference</h3>
      <LabelledInput
        id="property-reference-name"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].reference.name`}
        type="text"
        labelText="Name:"
        onChange={onChangeHandler}
      />
      <LabelledInput
        id="property-reference-email"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].reference.email`}
        type="email"
        labelText="Email:"
        onChange={onChangeHandler}
      />
      <LabelledInput
        id="property-reference-phone"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].reference.phone`}
        type="text"
        labelText="Phone:"
        onChange={onChangeHandler}
      />
      {index > 0 ? (
        <button onClick={onRemoveHandler}>Remove History</button>
      ) : null}
    </div>
  );
}
