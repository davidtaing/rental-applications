import { useRouter } from "next/router";

interface Props<T> {
  prevUrl?: string;
  nextUrl?: string;
  getValues: () => T;
  submit?: boolean;
}

/**
 * Allows the user to navigate to the other pages.
 */
export function FormNavigation<T>({
  prevUrl,
  nextUrl,
  getValues,
  submit,
}: Props<T>) {
  const router = useRouter();
  const onPrevClick = () => {
    if (prevUrl) {
      console.log(getValues());
      router.push(prevUrl);
    }
  };
  const onNextClick = () => {
    if (nextUrl) {
      console.log(getValues());
      router.push(nextUrl);
    }
  };

  return (
    <div className="formNavigation">
      {prevUrl ? (
        <button
          className="btn--secondary-outline"
          onClick={onPrevClick}
          type="button"
        >
          Prev
        </button>
      ) : null}
      {nextUrl ? (
        <button className="btn--primary" onClick={onNextClick} type="button">
          Next
        </button>
      ) : null}
      {submit ? (
        <button className="btn--primary" type="button">
          Submit
        </button>
      ) : null}
    </div>
  );
}
