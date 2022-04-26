import { initLeaseDetailsFormState } from "../../LeaseDetailsFormSegment";
import { initOtherOccupantsFormState } from "../../OtherOccupantsFormSegment";
import { initPetsFormState } from "../../PetsFormSegment";
import { initTenantDetailsFormState } from "../../TenantDetailsFormSegment";

export const initApplicationFormState = () => {
  return {
    ...initLeaseDetailsFormState,
    ...initTenantDetailsFormState,
    ...initOtherOccupantsFormState,
    ...initPetsFormState,
  };
};
