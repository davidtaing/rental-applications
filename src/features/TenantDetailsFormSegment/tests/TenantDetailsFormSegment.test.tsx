import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TenantDetailsFormSegment } from "../components/TenantDetailsFormSegment";

test("renders 'Add Tenant' button by default", () => {
  render(<TenantDetailsFormSegment />);
  const addButton = screen.getByText(/^add tenant$/i);

  expect(addButton).toBeTruthy();
});

test("does not render 'Remove Tenant' button by default", () => {
  render(<TenantDetailsFormSegment />);
  const removeButton = screen.queryByText(/^remove tenant$/i);

  expect(removeButton).toBeFalsy();
});

test("does not render Employment Item", async () => {
  render(<TenantDetailsFormSegment />);
  const jobHeader = screen.queryByText(/^job$/i);

  expect(jobHeader).toBeFalsy();
});

test("does not render Income Support Item", async () => {
  render(<TenantDetailsFormSegment />);
  const paymentHeader = screen.queryByText(/^payment$/i);

  expect(paymentHeader).toBeFalsy();
});

test("does render Rental Income Item", async () => {
  render(<TenantDetailsFormSegment />);
  const propertyHeader = screen.queryByText(/^property$/i);

  expect(propertyHeader).toBeTruthy();
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
