import { screen } from "@testing-library/react";
import { TenantDetailsFormSegment } from "../components/TenantDetailsFormSegment";
import { initTenantDetailsFormState, createTenant } from "../utils";
import { customRender } from "../../ApplicationForm";

test("Remove Tenant button is not rendered when there is one tenant", () => {
  const initialValues = { ...initTenantDetailsFormState() };

  customRender(<TenantDetailsFormSegment />, initialValues);
  const removeButton = screen.queryByText("Remove Tenant");

  expect(initialValues.tenants.length).toBe(1);
  expect(removeButton).toBeNull();
});

test("Remove Tenant button is rendered when there are two tenants", () => {
  const initialValues = { tenants: [createTenant(), createTenant()] };

  customRender(<TenantDetailsFormSegment />, initialValues);
  const removeButton = screen.getByText("Remove Tenant");

  expect(initialValues.tenants.length).toBe(2);
  expect(removeButton).toBeTruthy();
});
