import React from 'react';

const FormAction = () => {
    let handleFormAction =(formData)=>{
        console.log(formData.get('name'))
        //e.preventDefault();

    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="name" id="" placeholder='your name' /> <br />
                <input type="email" name="" id="" placeholder='your email' /> <br />
                <input type="submit" name="email" id="" />
            </form>
        </div>
    );
};

export default FormAction;