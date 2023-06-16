import { render, screen, within } from "@testing-library/react";
import UserList from "./userList";

function renderComponent() {
  const users = [
    {
      name: "varun",
      email: "va@gmail.com",
    },
    {
      name: "Nancy",
      email: "nancy@gmail.com",
    },
  ];

  render(<UserList users={users} />);

  return {
    users
  }
}

test("Calculate total number of users", () => {
  renderComponent();
  const rows = within(screen.getByTestId("userlist")).getAllByRole("row");
  expect(rows).toHaveLength(2);
});

test("Verify each user details", () => {
  const {users} = renderComponent();
  for (let u of users) {
    const name = screen.getByRole("cell", { name: u.name });
    const email = screen.getByRole("cell", { name: u.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
