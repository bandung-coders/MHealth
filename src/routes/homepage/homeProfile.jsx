import React from 'react';

import MainFeature from '../../components/atoms/feature';
import Feature2 from '../../assets/feature-1.png'
import Feature1 from '../../assets/feature-2.png'

import ProfileDesc from '../../components/molecule/profile/profiledesc';
import ProfileHeader from '../../components/molecule/profile/profileHeader';

function HomeProfile() {
    return ( 
    <>
     <div className='homepage-container '>
        <ProfileHeader/>

        <ProfileDesc/>

     </div>
    </>
    );
}

export default HomeProfile;