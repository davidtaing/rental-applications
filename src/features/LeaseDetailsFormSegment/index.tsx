import LabelledInput from "../../components/common/LabelledInput";

function LeaseDetailsFormSegment() {
  return (
    <div className="leaseDetailsFormSegment">
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

export default LeaseDetailsFormSegment;
