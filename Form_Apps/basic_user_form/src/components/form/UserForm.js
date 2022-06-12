import styles from './UserForm.module.css'
import Button from '../shared/Button'
import Card from '../shared/Card'
import { useState } from 'react'
import Popup from '../shared/PopUp'


const Form = (props) => {
    const [popup, updatePopupState] = useState({
        isValid: true,
        msg: ''
    });

    const [name, addName] = useState('');
    const [age, addAge] = useState('');

    function updateName (event) {
        addName(event.target.value);
    }

    function updateAge (event) {
        addAge(event.target.value);
    }

    function submitInfo(event) {
        event.preventDefault();

        if(name.length < 1 || age.length < 1)
        {
            updatePopupState(
                {
                    isValid: false,
                    msg: 'Enter all fields values'
                
            });
           
        }
        else if (Number(age) < 1 ) {
            updatePopupState(
                {
                    isValid: false,
                    msg: 'Age is not correct'
                
            });
        }
        else {
            props.addUser({
                id: Math.random().toFixed(5).toString(),
                userName: name,
                userAge: age
            });
        }
    }

    function handleClose() {
        updatePopupState(
            {
                isValid: true,
                msg: ''
            
        });
    }

    return (
        <Card>
        <form onSubmit={submitInfo}>
            <div className={styles.form_control}>
                <label>User Name </label>
                <input type="text" maxLength='50' onChange={updateName}  />
            </div>
            <div>
                <label>Age </label>
                <input type="number" onChange={updateAge}/>
            </div>
            <Button type="submit" title="Add User Info" />
            
        </form>
        {!popup.isValid &&  <Popup  content={popup.msg}  handleClose={handleClose} ></Popup> }
        </Card>
        
    );
}

export default Form;