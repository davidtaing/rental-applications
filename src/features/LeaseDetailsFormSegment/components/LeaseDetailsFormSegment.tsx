import { useForm, SubmitHandler } from "react-hook-form";
import { LeaseDetailsState } from "../types";

export function LeaseDetailsFormSegment() {
  const { register, handleSubmit } = useForm<LeaseDetailsState>();
  const onSubmit: SubmitHandler<LeaseDetailsState> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Address:</label>
      <input {...register("address")} />
      <label>Rent Per Week:</label>
      <input {...register("rent")} />
      <label>Start Date:</label>
      <input {...register("startDate")} />
      <label>Lease Period (Month):</label>
      <input {...register("leasePeriod")} />

      <button className="btn--primary" type="submit">
        Submit
      </button>
    </form>
  );
}
