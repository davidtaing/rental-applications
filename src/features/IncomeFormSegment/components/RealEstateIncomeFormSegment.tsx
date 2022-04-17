import dynamic from "next/dynamic";
import { FieldArrayFormSegment } from "../../../components/common/FieldArrayFormSegment";
import { RealEstateIncome } from "../types";
import { createRealEstateIncome } from "../utils";
import { RealEstateIncomeItemProps } from "./RealEstateIncomeItem";

const RealEstateIncomeItem = dynamic<RealEstateIncomeItemProps>(() =>
  import("./RealEstateIncomeItem").then((mod) => mod.RealEstateIncomeItem)
);

interface Props {
  formikReference: string;
  data: Array<RealEstateIncome>;
}

export function RealEstateIncomeFormSegment({ formikReference, data }: Props) {
  return (
    <div className="realEstateIncomeFormSegment">
      <h3>Real Estate Income</h3>
      <FieldArrayFormSegment
        values={data}
        formikReference={`${formikReference}.realEstateIncome`}
        createItemFn={createRealEstateIncome}
        buttonText="Real Estate Income"
      >
        {data.map((item, idx) => (
          <RealEstateIncomeItem
            key={idx}
            formikReference={`${formikReference}[${idx}]`}
          />
        ))}
      </FieldArrayFormSegment>
    </div>
  );
}
