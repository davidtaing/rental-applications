import { FieldArray } from "formik";
import { ChangeEventHandler } from "react";

import TenantItem from "./TenantItem";

import { createTenant } from "../../utils";
import Tenant from "../../types/TenantInterface";

interface TenantListProps {
  values: Array<Tenant>;
  onChangeHandler: ChangeEventHandler;
}

function TenantsList({ values, onChangeHandler }: TenantListProps) {
  return (
    <div className="tenants-list--container">
      <FieldArray name="tenants">
        {(arrayHelpers) => (
          <>
            {values.map((item, index) => (
              <TenantItem
                key={index}
                index={index}
                propertyHistory={item.propertyHistory}
                onRemoveHandler={() => arrayHelpers.remove(index)}
                handleChange={onChangeHandler}
              />
            ))}
            <button onClick={() => arrayHelpers.push(createTenant())}>
              Add Co-Tenant
            </button>
          </>
        )}
      </FieldArray>
    </div>
  );
}

export default TenantsList;
