import React from 'react';
import { Outlet } from "react-router-dom";
import MainButton from '../../components/atoms/button';
import RoundbgSplash from '../../components/atoms/roundbgSplash';
import { useState } from 'react';
import '../../components/atoms/assetsvg.css'

function Splash() {
    const [Header, setHeader] = useState(false);
    const [hideBtn, sethideBtn] = useState(true)

    function headerStatus(){
        setHeader(!Header)
    }

    function btnStatus(){
        sethideBtn(!hideBtn)
    }

    return ( 
    <>
    
    {Header && <header className='.splash-header-container'>
        <RoundbgSplash/>
    </header >

        
    }
        
    {/* <h1>splash page</h1> */}
    <Outlet /> 


    
    {hideBtn && <div>

            <div className='logo-container'>
                <span className='micon-logo'></span>
            </div>

            <div className='center splash-btn'>
                <MainButton hideBtnOnClick={btnStatus} hideHeaderOnClick={headerStatus} linkPath="/splash/1">Mulai</MainButton>
            </div>

        </div>
        }
    </>


    );
}

export default Splash;