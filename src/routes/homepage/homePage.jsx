import React from 'react';

import HomeHeader from '../../components/molecule/homepage/homeHeader';
import HomeContent from '../../components/molecule/homepage/homeContent';

function HomePage() {
    return ( 
    <>
     <div className='homepage-container'>
        <HomeHeader/>
        <HomeContent/>
     </div>
    </>
    );
}

export default HomePage;