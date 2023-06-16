import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Add new user and show in list", async () => {
  render(<App />);

  const nameField = screen.getByRole("textbox", { name: /name/i });
  const emailField = screen.getByRole("textbox", { name: /email/i });
  await user.click(nameField);
  await user.keyboard("varun");

  await user.click(emailField);
  await user.keyboard("arya@g.com");

  const submitBtn = screen.getByRole("button");

  await user.click(submitBtn);

  const name = screen.getByRole("cell", { name: "varun" });
  const email = screen.getByRole("cell", { name: "arya@g.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
