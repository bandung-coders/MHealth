import React from 'react'


function Number(props) {
    return ( <>
    <div className='number-container'>
        <div className='number'>{props.children}</div>
    </div>
    
    </> );
}

export default Number;  