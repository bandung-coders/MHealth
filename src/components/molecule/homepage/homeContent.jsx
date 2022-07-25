import React from 'react'
import MainFeature from '../../atoms/feature';
import Feature2 from '../../../assets/feature-1.png'
import Feature1 from '../../../assets/feature-2.png'

function HomeContent() {
    return ( <>
    
    <div className="feature-container">
           <div></div>
           <MainFeature linkPath="/diagnose" desc="Konsultasi"><img src={Feature1} alt="" /></MainFeature>
           <MainFeature linkPath="/profile" desc="Tentang Aplikasi"><img src={Feature2} alt="" /></MainFeature>
        </div>
    
    
    </> );
}

export default HomeContent;