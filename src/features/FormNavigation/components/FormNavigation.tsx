import { useRouter } from "next/router";

interface Props {
  prevUrl?: string;
  nextUrl?: string;
}

export function FormNavigation({ prevUrl, nextUrl }: Props) {
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
        <button onClick={onPrevClick} type="button">
          Prev
        </button>
      ) : null}
      {nextUrl ? (
        <button onClick={onNextClick} type="button">
          Next
        </button>
      ) : null}
    </div>
  );
}
