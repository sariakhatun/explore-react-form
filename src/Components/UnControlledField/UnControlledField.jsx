import React, { useRef } from 'react';

const UnControlledField = () => {
    let emailRef = useRef('')
    let passwordRef = useRef('')
    let handleSubmit = e =>{
        e.preventDefault()
       // console.log(emailRef.current.value)
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        console.log(email)
        console.log(password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" placeholder='your email' /> <br />
                <input type="password" name=""  placeholder='password' ref={passwordRef}/> <br />
                <input type="submit" name=""  />
            </form>
        </div>
    );
};

export default UnControlledField;