import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./userForm";

test("page contains two input and one button", () => {
  render(<UserForm />);

  const inputFields = screen.getAllByRole("textbox");
  const btn = screen.getByRole("button");

  expect(inputFields).toHaveLength(2);
  expect(btn).toBeInTheDocument();
});

test("Enter name and email values and press submit", async () => {
  //mock function which passed to component
  const mock = jest.fn();

  render(<UserForm updateList={mock} />);

  const nameField = screen.getByRole("textbox", {name: /name/i});
  const emailField = screen.getByRole("textbox", {name: /email/i});
  await user.click(nameField);
  await user.keyboard("varun");

  await user.click(emailField);
  await user.keyboard("arya@g.com");

  const submitBtn = screen.getByRole("button");

  await user.click(submitBtn);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("varun", "arya@g.com");
});

test("Empty string after pressing submit btn", async () => {
   
    render(<UserForm updateList={()=>{}} />);
  
    const nameField = screen.getByRole("textbox", {name: /name/i});
    const emailField = screen.getByRole("textbox", {name: /email/i});
    await user.click(nameField);
    await user.keyboard("varun");
  
    await user.click(emailField);
    await user.keyboard("arya@g.com");
  
    const submitBtn = screen.getByRole("button");
  
    await user.click(submitBtn);
  
    expect(nameField).toHaveValue('');
    expect(emailField).toHaveValue('');
  });