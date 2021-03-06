import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormNavigation } from "../components/FormNavigation";
import { useRouter } from "next/router";
import { ApplicationForm } from "../../ApplicationForm/components/ApplicationForm";

jest.mock("next/router", () => {
  const push = jest.fn();

  return {
    useRouter: jest.fn(() => ({
      push: push,
    })),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

test("prev button does not render when no prevUrl is provided", () => {
  render(<FormNavigation nextUrl="/next" getValues={jest.fn()} />, {
    wrapper: ApplicationForm,
  });

  const prevButton = screen.queryByText("Prev");
  const nextButton = screen.queryByText("Next");

  expect(prevButton).not.toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test("next button does not render when no nextUrl is provided", () => {
  render(<FormNavigation prevUrl="/prev" getValues={jest.fn()} />, {
    wrapper: ApplicationForm,
  });

  const prevButton = screen.queryByText("Prev");
  const nextButton = screen.queryByText("Next");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).not.toBeInTheDocument();
});

test("router.push('/next') is called when the Next button is clicked", async () => {
  render(<FormNavigation nextUrl="/next" getValues={jest.fn()} />, {
    wrapper: ApplicationForm,
  });
  const nextButton = screen.getByText("Next");

  await userEvent.click(nextButton);

  expect(useRouter().push).toBeCalledWith("/next");
});

test("router.push('/prev') is called when the Prev button is clicked", async () => {
  render(<FormNavigation prevUrl="/prev" getValues={jest.fn()} />, {
    wrapper: ApplicationForm,
  });
  const prevButton = screen.getByText("Prev");

  await userEvent.click(prevButton);

  expect(useRouter().push).toBeCalledWith("/prev");
});
