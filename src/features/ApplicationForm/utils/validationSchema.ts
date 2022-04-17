import { leaseDetailsFormSchema } from "../../LeaseDetailsFormSegment";
import { otherOccupantsFormSchema } from "../../OtherOccupantsFormSegment/utils/validationSchema";
import { petsFormSchema } from "../../PetsFormSegment";
import { tenantDetailsFormSchema } from "../../TenantDetailsFormSegment/utils/validationSchema";

export const validationSchema = leaseDetailsFormSchema
  .concat(tenantDetailsFormSchema)
  .concat(otherOccupantsFormSchema)
  .concat(petsFormSchema);
