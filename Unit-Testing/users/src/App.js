import UserForm from "./UserForm/userForm";
import UserList from "./UserList/userList";
import { useState } from "react";
import React from "react";
function App() {
  const [userList, updateUserList] = useState([]);

  const updateList = (name, email) => {
    updateUserList([...userList, { name, email }]);
  };

  return (
    <>
      <UserForm updateList={updateList}></UserForm>
      <hr />
      <UserList users={userList}></UserList>
    </>
  );
}

export default App;
