import styles from "./UserList.module.css";
import Card from "../shared/Card";

const UserList = (props) => {
  const list = props.userList;

  const listUI = list.map((user) => (
    <li className={styles.userList} key={user.id}>
      {user.userName} ({user.userAge})
    </li>
  ));

  return (
    <Card className={styles.users}>
      <ul>{listUI}</ul>
    </Card>
  );
};

export default UserList;
