import styles from './UserList.module.css'
import Card from '../shared/Card'
import User from './User'


const User = (props) => {
    const value = `${props.name} (${props.age})`
    return (
        <Card>
            <User info={value}></User>
        </Card>
    )
} 

export default User;