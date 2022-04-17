import { FieldArray, useFormikContext } from "formik";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
import { Tenant } from "../types";
import { createTenant } from "../utils";
import { TenantItem } from "./TenantItem";

/**
 * Form Segment for Rent-Paying Occupants
 */
export function TenantDetailsFormSegment() {
  const {
    values: { tenants },
  } = useFormikContext();

  return (
    <div className="tenantDetailsForm formSegment">
      <h2>Tenant Details</h2>
      <FieldArrayFormSegment
        values={tenants}
        formikReference="tenants"
        createItemFn={createTenant}
        buttonText="Tenant"
        minItems={1}
      >
        {tenants.map((item: Tenant, idx: string) => (
          <TenantItem
            key={idx}
            formikReference={`tenants[${idx}]`}
            data={item}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
