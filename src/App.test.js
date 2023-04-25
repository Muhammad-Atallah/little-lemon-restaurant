import { getByTestId, getByText, render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";

test("renders form properly", () => {
  const { getByTestId, getByLabelText } = render(<BookingForm />);

  const nameInput = getByLabelText("Full Name");
  expect(nameInput).toHaveAttribute("required");

  const emailInput = getByTestId("res-email");
  expect(emailInput).toHaveAttribute("required");
  expect(emailInput).toHaveAttribute(
    "pattern",
    "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  );

  const dateInput = getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
});
