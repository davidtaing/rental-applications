import { useRouter } from "next/router";
import { updateAction } from "../../ApplicationForm/actions";
import { useApplicationFormCtx } from "../../ApplicationForm/contexts/ApplicationFormCtx";

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
  const [, dispatch] = useApplicationFormCtx();
  const router = useRouter();
  const onClick = (url?: string) => {
    dispatch(updateAction(getValues()));
    if (url) {
      router.push(url);
    }
  };

  return (
    <div className="formNavigation">
      {prevUrl ? (
        <button
          className="btn--secondary-outline"
          onClick={() => onClick(prevUrl)}
          type="button"
        >
          Prev
        </button>
      ) : null}
      {nextUrl ? (
        <button
          className="btn--primary"
          onClick={() => onClick(nextUrl)}
          type="button"
        >
          Next
        </button>
      ) : null}
      {submit ? (
        <button
          className="btn--primary"
          type="button"
          onClick={() => onClick()}
        >
          Submit
        </button>
      ) : null}
    </div>
  );
}
