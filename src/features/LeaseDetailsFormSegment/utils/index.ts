import * as Yup from "yup";
import { LeaseDetailsState } from "../types";

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

export const validationSchema = Yup.object({
  address: Yup.string().required(),
  rent: Yup.number().required().positive().integer(),
  startDate: Yup.date().required(),
  leasePeriod: Yup.number().required().positive().integer(),
});
