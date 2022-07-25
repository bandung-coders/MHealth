import React from 'react'
import RoundbgMain from '../../atoms/roundbgMain';

function HomeHeader() {
    return ( <>
    
    <header className='header-feature-container'>
            <RoundbgMain/>
            <div className='header-desc-container'>
                <h1 className='header-homepage a'>Halo, Ardo. Kamu kenapa?</h1>
                <h1 className='header-homepage'>Ada yang bisa kami bantu?</h1>
            </div>
        </header>
    
    
    </> );
}

export default HomeHeader;