import { useForm, SubmitHandler } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInput";
import { FormNavigation } from "../../FormNavigation";
import { LeaseDetailsFormState } from "../types";

export function LeaseDetailsFormSegment() {
  const { register, handleSubmit, getValues } =
    useForm<LeaseDetailsFormState>();
  const onSubmit: SubmitHandler<LeaseDetailsFormState> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Lease Details:</h1>
      <LabelledInput
        label="Address:"
        registerReturn={register("leaseDetails.address")}
      />
      <LabelledInput
        type="number"
        label="Rent Per Week:"
        registerReturn={register("leaseDetails.rent")}
      />
      <LabelledInput
        type="date"
        label="Start Date:"
        registerReturn={register("leaseDetails.startDate")}
      />
      <LabelledInput
        type="number"
        label="Lease Period (Month):"
        registerReturn={register("leaseDetails.period")}
      />
      <FormNavigation<LeaseDetailsFormState>
        nextUrl="/tenant-details"
        getValues={() => getValues()}
      />
    </form>
  );
}
