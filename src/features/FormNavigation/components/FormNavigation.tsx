import { useRouter } from "next/router";

interface Props {
  prevUrl?: string;
  nextUrl?: string;
  submit?: boolean;
}

/**
 * Allows the user to navigate to the other pages.
 */
export function FormNavigation({ prevUrl, nextUrl, submit }: Props) {
  const router = useRouter();
  const onPrevClick = () => {
    if (prevUrl) {
      router.push(prevUrl);
    }
  };
  const onNextClick = () => {
    if (nextUrl) {
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
        <button className="btn--primary" type="submit">
          Submit
        </button>
      ) : null}
    </div>
  );
}
