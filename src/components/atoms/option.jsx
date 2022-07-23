import React from 'react'

function Option({value, content}) {
    return ( <>
    
        <option value={value}>{content}</option>
    
    </> );
}

export default Option;