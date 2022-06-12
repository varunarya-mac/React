import styles from './UserList.module.css'
import Card from '../shared/Card'

const UserList = (props) => {

    const list = props.userList;

    const listUI = list.map((user) => <label className={styles.userList} key={user.id}>{user.userName} ({user.userAge})</label> )


    return (
       <Card>
        {listUI}
       </Card> 
        )
} 

export default UserList;