import React from 'react';
import {useNavigate} from 'react-router-dom'


function MainButton(props,path) {
    const navigate = useNavigate();

    return ( <>
    <div className='buttonlog-container'>
        <button className='login-button' onClick={()=>{navigate(props.linkPath)}}>{props.children}</button>
    </div>
    </> );
}

export default MainButton;