import { render, screen } from "@testing-library/react";
import { FieldArrayButtons } from "../components/common/FieldArrayButtons";

test("does not render remove button with arrayLength = 0", () => {
  render(
    <FieldArrayButtons
      append={jest.fn()}
      remove={jest.fn()}
      createItemFn={jest.fn()}
      arrayLength={0}
    />
  );

  const removeButton = screen.queryByText("-");
  expect(removeButton).toBeFalsy();
});

test("renders + and - buttons with default buttonSize = 'small'", () => {
  render(
    <FieldArrayButtons
      append={jest.fn()}
      remove={jest.fn()}
      createItemFn={jest.fn()}
      arrayLength={1}
    />
  );

  const addButton = screen.getByText("+");
  const removeButton = screen.getByText("-");

  expect(addButton).toBeTruthy();
  expect(removeButton).toBeTruthy();
});

test("renders 'Add Tenant' and 'Remove Tenant' buttons with buttonSize = 'large' and buttonText = 'Tenant'", () => {
  render(
    <FieldArrayButtons
      append={jest.fn()}
      remove={jest.fn()}
      createItemFn={jest.fn()}
      buttonSize="large"
      buttonText="Tenant"
      arrayLength={1}
    />
  );

  const addButton = screen.getByText(/^add tenant$/i);
  const removeButton = screen.getByText(/^remove tenant$/i);

  expect(addButton).toBeTruthy();
  expect(removeButton).toBeTruthy();
});
