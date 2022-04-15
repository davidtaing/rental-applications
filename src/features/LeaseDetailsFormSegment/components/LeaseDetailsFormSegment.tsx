import LabelledInput from "../../../components/common/LabelledInput";
import { FormNavigation } from "../../FormNavigation";

/**
 * LeaseDetails Form Segment
 * Corresponds with the /lease-details path
 */
export function LeaseDetailsFormSegment() {
  return (
    <div className="leaseDetailsFormSegment">
      <h2>Lease Details</h2>
      {/* Property Address */}
      <LabelledInput
        labelText="Address:"
        id="address"
        name="address"
        type="text"
      />
      {/* Rent */}
      <LabelledInput labelText="Rent:" id="rent" name="rent" type="number" />
      {/* Start Date */}
      <LabelledInput
        labelText="Start Date:"
        id="date"
        name="startDate"
        type="date"
      />
      {/* Lease Period */}
      <LabelledInput
        labelText="Lease Period:"
        id="leasePeriod"
        name="leasePeriod"
        type="number"
      />
      <FormNavigation nextUrl="/tenant-details" />
    </div>
  );
}
