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

        if(name.trim().length < 1 || age.trim().length < 1)
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

            addAge('');
        addName('');
            
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
        <Card className={styles.input}>
        <form onSubmit={submitInfo}>
            <div>
                <label htmlFor='username' >User Name </label>
                <input id='username' type="text" maxLength='50' value={name}  onChange={updateName}  />
            </div>
            <div>
                <label htmlFor='userage'>Age </label>
                <input id='userage' type="number" value={age} onChange={updateAge}/>
            </div>
            <Button type="submit" title="Add User Info" />
            
        </form>
        {!popup.isValid &&  <Popup  content={popup.msg}  handleClose={handleClose} ></Popup> }
        </Card>
        
    );
}

export default Form;