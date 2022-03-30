import LeaseDetails from "./LeaseDetails";
import OccupantsSummary from "./OccupantsSummary";
import Tenant from "./Tenant";
import OtherOccupant from "./OtherOccupant";
import Pet from "./Pet";

export interface InitialState {
  leaseDetails: LeaseDetails;
  occupantsSummary: OccupantsSummary;
  tenantDetails: Array<Tenant>;
  otherOccupantDetails: Array<OtherOccupant>;
  petDetails: Array<Pet>;
}
