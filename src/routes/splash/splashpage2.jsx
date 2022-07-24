import React from 'react';
import MainButton from '../../components/atoms/button';
function Splashpage1() {

    return ( 
    <>
        <div className='splash-content-container'>
                <span className='micon-splash2'></span>
                <h1 className='header-desc'>Stop self diagnose</h1>
                <h4 className='desc'> “Berhenti melakukan self diagnose dengan apa yang terjadi pada diri kamu ya. “</h4>
            </div>

            <footer className='splash-footer-container'> 
            <div className='button-position'>
            <MainButton linkPath="/splash/3">Selanjutnya</MainButton>
            </div>
        </footer>
    </>
    );
}

export default Splashpage1;