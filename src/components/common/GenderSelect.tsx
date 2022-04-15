import LabelledSelect from "./LabelledSelect";

interface Props {
  formikReference: string;
}

export function GenderSelect({ formikReference }: Props) {
  return (
    <LabelledSelect
      labelText="Gender: "
      id="gender"
      name={formikReference}
      values={["Male", "Female", "Other"]}
    />
  );
}
