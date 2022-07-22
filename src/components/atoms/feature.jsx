import React from 'react';
import {useNavigate} from 'react-router-dom'

function MainFeature(props,path) {
    const navigate = useNavigate();

    return ( <>
    
    <div className='featureBox'>
        <img src={props.image} alt="" />
    </div>
    
    </> );
}

export default MainFeature;