import { FieldArray } from "formik";
import { ChangeEventHandler } from "react";

import PropertyHistory from "../../types/PropertyHistory";
import { createPropertyHistory } from "../../utils";
import { PropertyHistoryItem } from "./PropertyHistoryItem";

interface PropertyHistoryListProps {
  tenantIndex: number;
  propertyHistory: Array<PropertyHistory>;
}

/**
 * Form Segment for List of Property Histories,
 * i.e. Places of Residences
 */
function PropertyHistoryList({
  tenantIndex,
  propertyHistory,
}: PropertyHistoryListProps) {
  return (
    <div className="property-history--list">
      <FieldArray name={`tenants[${tenantIndex}].propertyHistory`}>
        {(arrayHelpers) => (
          <>
            {propertyHistory.map((item, index) => (
              <PropertyHistoryItem
                key={index}
                tenantIndex={tenantIndex}
                index={index}
                onRemoveHandler={() => arrayHelpers.remove(index)}
              />
            ))}
            <button onClick={() => arrayHelpers.push(createPropertyHistory())}>
              Add History
            </button>
          </>
        )}
      </FieldArray>
    </div>
  );
}

export default PropertyHistoryList;
