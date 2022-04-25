import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TenantDetailsFormSegment } from "../components/TenantDetailsFormSegment";

test("Add Tenant button is rendered", () => {
  render(<TenantDetailsFormSegment />);
  const addButton = screen.getByText(/^add tenant$/i);

  expect(addButton).toBeTruthy();
});

test("Remove Tenant button is not rendered with 1 tenant", () => {
  render(<TenantDetailsFormSegment />);
  const removeButton = screen.queryByText(/^remove tenant$/i);

  expect(removeButton).toBeFalsy();
});

test("Add Tenant and Remove Tenant buttons add and remove tenants when clicked", async () => {
  render(<TenantDetailsFormSegment />);
  const addButton = screen.getByText(/^add tenant$/i);
  const beforeAdd = screen.getAllByText(/^tenant$/i);

  expect(beforeAdd.length).toBe(1);
  await userEvent.click(addButton);

  const afterAdd = screen.getAllByText(/^tenant$/i);
  expect(afterAdd.length).toBe(2);

  const removeButton = screen.getByText(/^remove tenant$/i);
  await userEvent.click(removeButton);

  const afterRemove = screen.getAllByText(/^tenant$/i);
  expect(afterRemove.length).toBe(1);
});
