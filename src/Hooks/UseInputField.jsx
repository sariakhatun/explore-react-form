import React, { useState } from 'react';

const UseInputField = (defaultValue) => {
    let [fieldValue,setFieldValue] = useState(defaultValue);
    let handleFieldOnChange = e =>{
        setFieldValue(e.target.value);

    }
    return [fieldValue,handleFieldOnChange]
};

export default UseInputField;