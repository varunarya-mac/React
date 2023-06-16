// import { useState } from "react";

function UserList(prop) {
  const renderUsers = prop.users.map((user) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email ID</td>
        </tr>
      </thead>
      <tbody data-testid='userlist' >{renderUsers}</tbody>
    </table>
  );
}

export default UserList;
