import { render, RenderOptions } from "@testing-library/react";
import { ApplicationForm } from "../../components/ApplicationForm";
import { ApplicationFormState } from "../../types";

export const customRender = (
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
