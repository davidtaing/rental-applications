import LabelledInput from "../../../components/common/LabelledInput";

/**
 * Corresponds with the /lease-details path
 */
export function LeaseDetailsFormSegment() {
  return (
    <div className="leaseDetailsForm formSegment">
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
    </div>
  );
}
