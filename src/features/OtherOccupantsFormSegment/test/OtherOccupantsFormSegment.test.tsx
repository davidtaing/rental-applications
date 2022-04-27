import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApplicationForm } from "../../ApplicationForm/components/ApplicationForm";
import { OtherOccupantsFormSegment } from "../components/OtherOccupantsFormSegment";

test("renders 'Add Occupant' button", async () => {
  render(<OtherOccupantsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addOccupantButton = screen.getByText(/^add occupant$/i);

  expect(addOccupantButton).toBeTruthy();
});

test("does not render 'Remove Occupant' button", async () => {
  render(<OtherOccupantsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addOccupantButton = screen.queryByText(/^remove occupant$/i);

  expect(addOccupantButton).toBeFalsy();
});

test("renders Occupant header when 'Add Occupant' button is clicked", async () => {
  render(<OtherOccupantsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addOccupantButton = screen.getByText(/^add occupant$/i);

  let occupantHeader = screen.queryByText(/^occupant$/i);
  expect(occupantHeader).toBeFalsy();

  await userEvent.click(addOccupantButton);

  let occupantHeaders = screen.queryAllByText(/^occupant$/i);
  expect(occupantHeaders.length).toBe(1);
});

test("renders 'Remove Occupant' button when 'Add Occupant' button is clicked", async () => {
  render(<OtherOccupantsFormSegment />, {
    wrapper: ApplicationForm,
  });
  const addOccupantButton = screen.getByText(/^add occupant$/i);

  await userEvent.click(addOccupantButton);

  let removeOccupantButton = screen.getByText(/^remove occupant$/i);
  expect(removeOccupantButton).toBeTruthy();
});
