import { FieldArray, useFormikContext } from "formik";
import { useRouter } from "next/router";
import { FormNavigation } from "../../FormNavigation";
import { initTenantState } from "../utils";
import { IndividualTenantFormSegment } from "./IndividualTenantFormSegment";
interface Props {}

/**
 * formik values
 *   tenants: Tenants[]
 *    tenant details form segment
 */

export function TenantDetailsFormSegment({}: Props) {
  const {
    values: { tenants },
  } = useFormikContext();

  return (
    <div className="tenantDetailsFormSegment">
      <FieldArray
        name="tenants"
        render={(arrayHelpers) => (
          <>
            {tenants.map((item: any, idx: string) => (
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
              nextUrl="/other-occupant-details"
            />
          </>
        )}
      />
    </div>
  );
}
