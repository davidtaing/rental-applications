import { FieldArray, useFormikContext } from "formik";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const onPrevClick = () => {
    // validate form input

    // then change page
    router.push("/lease-details");
  };
  const onNextClick = () => {
    // validate form input

    // then change page
    router.push("/tenant-details");
  };

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
          </>
        )}
      />
      <div className="formNavigation">
        <button onClick={onPrevClick} type="button">
          Prev
        </button>
        <button onClick={onNextClick} type="button">
          Next
        </button>
      </div>
    </div>
  );
}
