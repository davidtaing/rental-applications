import { LeaseDetailsState } from "../types/LeaseDetailsState";

export function initLeaseDetailsState({
  address,
  rent,
  startDate,
  leasePeriod,
}: Partial<LeaseDetailsState> = {}): LeaseDetailsState {
  return {
    address: address ?? "",
    rent: rent ?? 0,
    startDate: startDate ?? new Date(),
    leasePeriod: leasePeriod ?? 0,
  };
}
