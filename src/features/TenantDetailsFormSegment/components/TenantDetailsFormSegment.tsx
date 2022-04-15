import { FieldArray, useFormikContext } from "formik";
import { FormNavigation } from "../../FormNavigation";
import { Tenant } from "../types";
import { initTenantState } from "../utils";
import { IndividualTenantFormSegment } from "./IndividualTenantFormSegment";

/**
 * TenantDetails Form Segment
 * Corresponds to the /tenant-details path
 */
export function TenantDetailsFormSegment() {
  const {
    values: { tenants },
  } = useFormikContext();

  return (
    <div className="tenantDetailsFormSegment">
      <FieldArray
        name="tenants"
        render={(arrayHelpers) => (
          <>
            {tenants.map((item: Tenant, idx: string) => (
              <IndividualTenantFormSegment key={idx} index={idx} />
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
            <FormNavigation
              prevUrl="/lease-details"
              nextUrl="/other-occupants"
            />
          </>
        )}
      />
    </div>
  );
}
