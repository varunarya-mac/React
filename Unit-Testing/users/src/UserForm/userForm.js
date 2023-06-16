import { useState } from 'react'


function UserForm(prop) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    // console.log(prop.updateList);

    function pressedSubmitBtn(e) {
        e.preventDefault();
        prop.updateList(name, email);
        setEmail('');
        setName('');
    }

    return (
        <form onSubmit={pressedSubmitBtn}>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' value={name} onChange= {(e)=> {setName(e.target.value)}}/>

                <label htmlFor='emailId'>Email</label>
                <input id='emailId' value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>

                <button type='submit'>Add user</button>
            </div>
        

        </form>   
    );
}

export default UserForm;