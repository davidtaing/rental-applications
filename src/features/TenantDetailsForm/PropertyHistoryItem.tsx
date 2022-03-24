import { MouseEventHandler } from "react";
import LabelledInput from "../../components/common/LabelledInput";
import RentalStatusSelect from "../../components/RentalStatusSelect";

interface PropertyHistoryItemProps {
  tenantIndex: number;
  index: number;
  onRemoveHandler: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Form Segment for the Individual Property Histories,
 * i.e. Places of Residences
 */
export function PropertyHistoryItem({
  tenantIndex,
  index,
  onRemoveHandler,
}: PropertyHistoryItemProps) {
  return (
    <div className="property-history--item">
      <h2>Property</h2>
      <LabelledInput
        id="property-address"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].address`}
        type="text"
        labelText="Address:"
      />
      <RentalStatusSelect
        id="property-status"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].status`}
      />
      <h3>Reference</h3>
      <LabelledInput
        id="property-reference-name"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].reference.name`}
        type="text"
        labelText="Name:"
      />
      <LabelledInput
        id="property-reference-email"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].reference.email`}
        type="email"
        labelText="Email:"
      />
      <LabelledInput
        id="property-reference-phone"
        name={`tenants[${tenantIndex}].propertyHistory[${index}].reference.phone`}
        type="text"
        labelText="Phone:"
      />
      {index > 0 ? (
        <button onClick={onRemoveHandler}>Remove History</button>
      ) : null}
    </div>
  );
}
