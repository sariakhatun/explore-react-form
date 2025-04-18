import React, { useState } from 'react';

const ControlledField = () => {
    let [password,setPassword]=useState('')
    let [error,setError] = useState('')
    let [email,setEmail]=useState('')
    let [name,setName] =useState('')
   let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email,password)
        // if(password.length<6){
        //     setError('password must be 6 character or longer.')
        // }else{
        //     setError('')
        // }

    }
    let handlePasswordOnChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
        if(password.length<6){
            setError('password must be 6 character or longer.')
        }else{
            setError('')
        }
    }
    let handleEmailChange = e =>{
        setEmail(e.target.value)

    }
    let handleNameChange = e =>{
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='your name' defaultValue={name} onChange={handleNameChange} /> <br />
                <input type="email" name="email" id="" placeholder='your mail' onChange={handleEmailChange} defaultValue={email} required/> <br />
                <input type="password" name="password" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required/> <br />
                <input type="submit" name=""  />

            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;