import { FieldArray } from "formik";
import { ChangeEventHandler, MouseEventHandler } from "react";

import LabelledInput from "../../components/common/LabelledInput";
import RentalStatusSelect from "../../components/RentalStatusSelect";
import PropertyHistory from "../../types/PropertyHistory";
import { createPropertyHistory } from "../../utils";

interface PropertyHistoryItemProps {
  tenantIndex: number;
  index: number;
  onChangeHandler: ChangeEventHandler;
  onRemoveHandler: MouseEventHandler<HTMLButtonElement>;
}

function PropertyHistoryItem({
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

interface PropertyHistoryListProps {
  tenantIndex: number;
  propertyHistory: Array<PropertyHistory>;
  onChangeHandler: ChangeEventHandler;
}

function PropertyHistoryList({
  tenantIndex,
  propertyHistory,
  onChangeHandler,
}: PropertyHistoryListProps) {
  return (
    <FieldArray name={`tenants[${tenantIndex}].propertyHistory`}>
      {(arrayHelpers) => (
        <div className="property-history-list">
          {propertyHistory.map((item, index) => (
            <PropertyHistoryItem
              key={index}
              tenantIndex={tenantIndex}
              index={index}
              onChangeHandler={onChangeHandler}
              onRemoveHandler={() => arrayHelpers.remove(index)}
            />
          ))}
          <button onClick={() => arrayHelpers.push(createPropertyHistory())}>
            Add History
          </button>
        </div>
      )}
    </FieldArray>
  );
}

export default PropertyHistoryList;
