import { FieldArray, useFormikContext } from "formik";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
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
      <FieldArrayFormSegment
        values={tenants}
        formikReference="tenants"
        initItem={initTenantState}
        buttonText="Tenant"
        minItems={1}
      >
        {tenants.map((item: Tenant, idx: string) => (
          <IndividualTenantFormSegment
            key={idx}
            formikReference={`tenants[${idx}]`}
            data={item}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
