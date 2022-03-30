import LeaseDetails from "./LeaseDetails";
import Tenant from "./Tenant";
import OtherOccupant from "./OtherOccupant";
import Pet from "./Pet";

export interface InitialState {
  leaseDetails: LeaseDetails;
  occupantSummary: {};
  tenantDetails: Array<Tenant>;
  otherOccupantDetails: Array<OtherOccupant>;
  petDetails: Array<Pet>;
}
