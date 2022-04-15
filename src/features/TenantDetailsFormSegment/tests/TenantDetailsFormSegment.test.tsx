import { render, RenderOptions, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TenantDetailsFormSegment } from "../components/TenantDetailsFormSegment";
import { ApplicationForm, ApplicationFormState } from "../../ApplicationForm";
import { initTenantDetailsState, initTenantState } from "../utils";

const customRender = (
  ui: React.ReactElement,
  initialValues?: Partial<ApplicationFormState>,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: (props) => (
      <ApplicationForm {...props} initialValues={initialValues} />
    ),
    ...options,
  });

test("Remove Tenant button is not rendered when there is one tenant", () => {
  const initialValues = { ...initTenantDetailsState() };

  customRender(<TenantDetailsFormSegment />, initialValues);
  const removeButton = screen.queryByText("Remove Tenant");

  expect(initialValues.tenants.length).toBe(1);
  expect(removeButton).toBeNull();
});

test("Remove Tenant button is rendered when there are two tenants", () => {
  const initialValues = { tenants: [initTenantState(), initTenantState()] };

  customRender(<TenantDetailsFormSegment />, initialValues);
  const removeButton = screen.getByText("Remove Tenant");

  expect(initialValues.tenants.length).toBe(2);
  expect(removeButton).toBeTruthy();
});
