import React from 'react';
import {useNavigate} from 'react-router-dom'

function MainFeature(props) {
    const navigate = useNavigate();

    return ( <>
     <div className="featureMini-container">
        <div className='featureBox' onClick={()=>{navigate(props.linkPath)}}>
        {props.children}
        {/* <img src={props.image} alt="" /> */}
    </div>
        <h3 className='feature-desc'>{props.desc}</h3>
        </div>
    </> );
}

export default MainFeature;