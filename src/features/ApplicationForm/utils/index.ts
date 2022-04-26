import { initLeaseDetailsFormState } from "../../LeaseDetailsFormSegment";
import { initOtherOccupantsFormState } from "../../OtherOccupantsFormSegment";
import { initPetsFormState } from "../../PetsFormSegment";
import { initTenantDetailsFormState } from "../../TenantDetailsFormSegment";
import { ApplicationFormState } from "../types/ApplicationFormState";

export const initApplicationFormState = (): ApplicationFormState => {
  return {
    ...initLeaseDetailsFormState(),
    ...initTenantDetailsFormState(),
    ...initOtherOccupantsFormState(),
    ...initPetsFormState(),
  };
};
