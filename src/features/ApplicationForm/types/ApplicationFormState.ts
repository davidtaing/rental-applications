import { LeaseDetailsState } from "../../LeaseDetailsFormSegment/";
import { OtherOccupantsFormState } from "../../OtherOccupantsFormSegment";
import { TenantDetailsFormState } from "../../TenantDetailsFormSegment";

export type ApplicationFormState = LeaseDetailsState &
  TenantDetailsFormState &
  OtherOccupantsFormState;
