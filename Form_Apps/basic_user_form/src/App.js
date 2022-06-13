import "./App.css";
import UserForm from "./components/form/UserForm";
import UserList from "./components/users/UserList";
import { useState } from "react";

function App() {
  const [users, addNewUser] = useState([]);

  function updateUserList(userDetails) {
    addNewUser((prevState) => {
      return [...prevState, userDetails];
    });
  }

  return (
    <div className="App">
      <UserForm addUser={updateUserList}></UserForm>
      <UserList userList={users}></UserList>
    </div>
  );
}

export default App;
