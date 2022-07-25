import React from 'react'
import RoundbgMain from '../../atoms/roundbgMain';
import Profile from '../../../assets/testprofile.png'
import Avatar from '../../atoms/avatar';
function ProfileHeader() {
    return ( <>
    
    
        <header className='header-feature-container profile-header'>
            <RoundbgMain/>
            <div className='header-profile-container'>
                    <Avatar><img src={Profile} alt="" /></Avatar>
            </div>
        </header>
    
    </> );
}

export default ProfileHeader;