import React from 'react';
import RoundbgMain from '../../components/atoms/roundbgMain';
import MainFeature from '../../components/atoms/feature';
import Feature2 from '../../assets/feature-1.png'
import Feature1 from '../../assets/feature-2.png'


function HomePage() {
    return ( 
    <>
     <div className='homepage-container'>
        <header className='header-feature-container'>
            <RoundbgMain/>
            <div className='header-desc-container'>
                <h1 className='header-homepage a'>Halo, Ardo. Kamu kenapa?</h1>
                <h1 className='header-homepage'>Ada yang bisa kami bantu?</h1>
            </div>
        </header>

        <div className="feature-container">
           <div></div>
           <MainFeature linkPath="/diagnose" desc="Konsultasi"><img src={Feature1} alt="" /></MainFeature>
           <MainFeature linkPath="/profile" desc="Tentang Aplikasi"><img src={Feature2} alt="" /></MainFeature>
        </div>

     </div>
    </>
    );
}

export default HomePage;