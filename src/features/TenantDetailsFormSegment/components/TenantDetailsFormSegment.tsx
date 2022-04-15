import { FieldArray, useFormikContext } from "formik";
import { Tenant } from "../types";
import { initTenantState } from "../utils";
import { IndividualTenantFormSegment } from "./IndividualTenantFormSegment";

/**
 * Form Segment for Rent-Paying Occupants
 */
export function TenantDetailsFormSegment() {
  const {
    values: { tenants },
  } = useFormikContext();

  return (
    <div className="tenantDetailsFormSegment">
      <h2>Tenant Details</h2>
      <FieldArray
        name="tenants"
        render={(arrayHelpers) => (
          <>
            {tenants.map((item: Tenant, idx: string) => (
              <IndividualTenantFormSegment
                key={idx}
                formikReference={`tenants[${idx}]`}
              />
            ))}
            <button
              type="button"
              onClick={() => arrayHelpers.push(initTenantState())}
            >
              Add Tenant
            </button>
            {tenants.length > 1 ? (
              <button type="button" onClick={() => arrayHelpers.pop()}>
                Remove Tenant
              </button>
            ) : null}
          </>
        )}
      />
    </div>
  );
}
