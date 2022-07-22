import React from 'react';
import {useNavigate} from 'react-router-dom'

function MainButton(props,path) {
    const navigate = useNavigate();

    return ( <>
    
    <button className='main-button' onClick={()=>{navigate(props.linkPath)}}>{props.children}</button>
    
    </> );
}

export default MainButton;