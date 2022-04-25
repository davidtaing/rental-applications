import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

interface Props<T> {
  append: UseFieldArrayAppend<any>;
  remove: UseFieldArrayRemove;
  createItemFn: () => T;
  arrayLength: number;
  buttonSize?: "small" | "large";
  buttonText?: string;
  minSize?: number;
}

export function FieldArrayButtons<T>({
  append,
  remove,
  createItemFn,
  arrayLength,
  buttonSize = "small",
  buttonText,
  minSize = 0,
}: Props<T>) {
  return (
    <div className="fieldArray--btn-container">
      <button
        className="btn--secondary-outline"
        type="button"
        onClick={() => append(createItemFn())}
      >
        {buttonSize === "small" ? "+" : `Add ${buttonText}`}
      </button>
      {arrayLength > minSize ? (
        <button
          className="btn--danger-outline"
          type="button"
          onClick={() => remove(arrayLength - 1)}
        >
          {buttonSize === "small" ? "-" : `Remove ${buttonText}`}
        </button>
      ) : null}
    </div>
  );
}
