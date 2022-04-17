import { RentalHistoryItem } from "./RentalHistoryItem";
import { Tenant } from "../../TenantDetailsFormSegment";
import { RentalHistory } from "../types";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
import { createRentalHistory } from "../utils";

interface Props {
  formikReference: string;
  data: Array<RentalHistory>;
}

export function RentalHistoryFormSegment({ formikReference, data }: Props) {
  return (
    <div className="rentalHistoryForm subFormSegment">
      <h3>Rental History</h3>
      <FieldArrayFormSegment
        values={data}
        formikReference={`${formikReference}.rentalHistory`}
        createItemFn={createRentalHistory}
        buttonText="Rental History"
        minItems={1}
      >
        {data.map((item, idx) => (
          <RentalHistoryItem
            key={idx}
            formikReference={`${formikReference}[idx]`}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
