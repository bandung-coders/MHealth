import React from 'react'
import {useState, useEffect} from 'react'
import Option from './option';

function Input({name, submitTo, placeholder}) {
    const [addDetail, setaddDetail]= useState(false);


    // React.useEffect(() => {
    //     setaddDetail(addDetailStatus);
    // }, [addDetailStatus])
  
    

    return ( <>
    <div className='inputContainer'>
        <select className='selectInput' placeholder={placeholder} name={name} id={submitTo}>
            <option value="Perempuan">Perempuan</option>
            <option value="laki">Laki-Laki</option>
        </select>
    </div>
    </> );
}

export default Input;