import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("form submits correctly", async () => {
  render(<CheckoutForm />);

  fireEvent.change(screen.getByLabelText(/first name:/i), {
    target: { value: "test value first name" },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "test value last name" },
  });
  fireEvent.change(screen.getByLabelText(/address/i), {
    target: { value: "test value address" },
  });
  fireEvent.change(screen.getByLabelText(/city/i), {
    target: { value: "test value city" },
  });
  fireEvent.change(screen.getByLabelText(/state/i), {
    target: { value: "test value state" },
  });
  fireEvent.change(screen.getByLabelText(/zip/i), {
    target: { value: "test value zip" },
  });

  fireEvent.click(screen.getByRole("button", { name: /checkout/i }));

  expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});
