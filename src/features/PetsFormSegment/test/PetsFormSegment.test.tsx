import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApplicationForm } from "../../ApplicationForm/components/ApplicationForm";
import { PetsFormSegment } from "../components/PetsFormSegment";

test("renders 'Add Pet' button", async () => {
  render(<PetsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addPetsButton = screen.getByText(/^add pet$/i);

  expect(addPetsButton).toBeTruthy();
});

test("does not render 'Remove Pet' button", async () => {
  render(<PetsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addPetsButton = screen.queryByText(/^remove pet$/i);

  expect(addPetsButton).toBeFalsy();
});

test("renders Pets header when 'Add Pet' button is clicked", async () => {
  render(<PetsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addPetButton = screen.getByText(/^add pet$/i);

  let petsHeader = screen.queryByText(/^pets$/i);
  expect(petsHeader).toBeFalsy();

  await userEvent.click(addPetButton);

  let petsHeaders = screen.queryAllByText(/^pets$/i);
  expect(petsHeaders.length).toBe(1);
});

test("renders 'Remove Occupant' button when 'Add Occupant' button is clicked", async () => {
  render(<PetsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addPetsButton = screen.getByText(/^add pet$/i);

  await userEvent.click(addPetsButton);

  let removePetsButton = screen.getByText(/^remove pet$/i);
  expect(removePetsButton).toBeTruthy();
});
