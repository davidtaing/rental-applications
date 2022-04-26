export * from "./validationSchema";
import { LeaseDetailsFormState, LeaseDetails } from "../types";

export function initLeaseDetailsFormState({
  address,
  rent,
  startDate,
  period,
}: Partial<LeaseDetails> = {}): LeaseDetailsFormState {
  return {
    leaseDetails: {
      address: address ?? "",
      rent: rent ?? 0,
      startDate: startDate ?? new Date(),
      period: period ?? 0,
    },
  };
}
