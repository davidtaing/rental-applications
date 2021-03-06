import { LeaseDetailsFormState } from "../../LeaseDetailsFormSegment";
import { OtherOccupantsFormState } from "../../OtherOccupantsFormSegment";
import { PetsFormState } from "../../PetsFormSegment";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export type ApplicationFormState = LeaseDetailsFormState &
  TenantDetailsFormState &
  OtherOccupantsFormState &
  PetsFormState;
