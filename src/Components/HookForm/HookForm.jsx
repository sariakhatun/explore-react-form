import React from 'react';
import UseInputField from '../../Hooks/UseInputField';

const HookForm = () => {
    let [name,nameOnChange] = UseInputField('')
    let [email,emailOnChange] = UseInputField('')
    let [password,passwordOnChange] = UseInputField('')
    let handleSubmit = e =>{
        e.preventDefault();
        console.log(name,email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name}/>
                <br />
                <input type="email" name="" id="" onChange={emailOnChange} /> <br />
                <input type="password" name="" id="" onChange={passwordOnChange} defaultValue={password} /> <br />
                <input type="submit" name="" id=""  />

            </form>
        </div>
    );
};

export default HookForm;