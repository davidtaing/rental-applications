import { useForm, SubmitHandler } from "react-hook-form";
import { LabelledInput } from "../../../components/common/LabelledInput";
import { FormNavigation } from "../../FormNavigation";
import { LeaseDetailsState } from "../types";

export function LeaseDetailsFormSegment() {
  const { register, handleSubmit, getValues } = useForm<LeaseDetailsState>();
  const onSubmit: SubmitHandler<LeaseDetailsState> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Lease Details:</h1>
      <LabelledInput label="Address:" registerReturn={register("address")} />
      <LabelledInput
        type="number"
        label="Rent Per Week:"
        registerReturn={register("rent")}
      />
      <LabelledInput
        type="date"
        label="Start Date:"
        registerReturn={register("startDate")}
      />
      <LabelledInput
        type="number"
        label="Lease Period (Month):"
        registerReturn={register("leasePeriod")}
      />
      <FormNavigation<LeaseDetailsState>
        nextUrl="/tenant-details"
        getValues={() => getValues()}
      />
    </form>
  );
}
