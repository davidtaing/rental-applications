import { FieldArray } from "formik";

import { PropertyHistoryItem } from "./PropertyHistoryItem";

import PropertyHistory from "../../../types/PropertyHistoryInterface";
import { createPropertyHistory } from "../utils";

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
