import { FieldArray } from "formik";

export interface Props {
  values: [];
  formikReference: string;
  initItem: () => {};
  buttonText: string;
  children: React.ReactNode;
  minItems?: number;
}

export function FieldArrayFormSegment({
  values,
  formikReference,
  initItem,
  buttonText,
  children,
  minItems = 0,
}: Props) {
  return (
    <FieldArray
      name={formikReference}
      render={(arrayHelpers) => (
        <>
          {children}
          <button type="button" onClick={() => arrayHelpers.push(initItem())}>
            Add {buttonText}
          </button>
          {values.length > minItems ? (
            <button type="button" onClick={() => arrayHelpers.pop()}>
              Remove {buttonText}
            </button>
          ) : null}
        </>
      )}
    />
  );
}
