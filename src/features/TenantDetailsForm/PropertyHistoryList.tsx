import { FieldArray } from "formik";
import { ChangeEventHandler } from "react";

import PropertyHistory from "../../types/PropertyHistory";
import { createPropertyHistory } from "../../utils";
import { PropertyHistoryItem } from "./PropertyHistoryItem";

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
