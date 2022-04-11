import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormNavigation } from "../components/FormNavigation";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

test("prev button does not render when no prevUrl is provided", () => {
  render(<FormNavigation nextUrl="/next" />);

  const prevButton = screen.queryByText("Prev");
  const nextButton = screen.queryByText("Next");

  expect(prevButton).not.toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test("next button does not render when no nextUrl is provided", () => {
  render(<FormNavigation prevUrl="/prev" />);

  const prevButton = screen.queryByText("Prev");
  const nextButton = screen.queryByText("Next");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).not.toBeInTheDocument();
});
