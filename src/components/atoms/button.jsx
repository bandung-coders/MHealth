import React from 'react';
import {useNavigate} from 'react-router-dom'

function MainButton(props) {
    const navigate = useNavigate();

    function navigates(){
        navigate(props.linkPath)
        props.hideHeaderOnClick()
        props.hideBtnOnClick()
    }
    return ( <>
    
    <button className='main-button' onClick={()=>{navigates()}}>{props.children}</button>
    
    </> );
}

export default MainButton;