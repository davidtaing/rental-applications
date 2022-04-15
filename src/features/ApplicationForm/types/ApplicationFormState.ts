import { LeaseDetailsState } from "../../LeaseDetailsFormSegment/";
import { OtherOccupantsFormState } from "../../OtherOccupantsFormSegment";
import { PetsFormState } from "../../PetsFormSegment";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export type ApplicationFormState = LeaseDetailsState &
  TenantDetailsFormState &
  OtherOccupantsFormState &
  PetsFormState;
