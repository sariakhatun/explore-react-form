import React from 'react';

const SimpleForm = () => {
    
    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log('form submitted')
        console.log(e.target.name.value);
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id=""placeholder='your name'/><br />
                <input type="email" name="email" id=""placeholder='your email' /><br />
                <input type="submit" name="" id="" />
                
            </form>
        </div>
    );
};

export default SimpleForm;