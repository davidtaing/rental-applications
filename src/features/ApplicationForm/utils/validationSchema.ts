import { leaseDetailsValidationSchema } from "../../LeaseDetailsFormSegment";
import { otherOccupantsSchema } from "../../OtherOccupantsFormSegment/utils/validationSchema";
import { petsFormSchema } from "../../PetsFormSegment";
import { tenantDetailsSchema } from "../../TenantDetailsFormSegment/utils/validationSchema";

export const validationSchema = leaseDetailsValidationSchema
  .concat(tenantDetailsSchema)
  .concat(otherOccupantsSchema)
  .concat(petsFormSchema);
