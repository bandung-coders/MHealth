import React from 'react'
import {useState, useEffect} from 'react'

function Input({type="text", placeholder, submitTo, addDetailStatus=true}) {
    const [addDetail, setaddDetail]= useState(false);


    React.useEffect(() => {
        setaddDetail(addDetailStatus);
    }, [addDetailStatus])
  
    

    return ( <>
    <div className='inputContainer'>
        <input className="input" type={type} placeholder={placeholder} />

        { addDetail && <small className='addDetail'>asda</small>}

    </div>
    </> );
}

export default Input;