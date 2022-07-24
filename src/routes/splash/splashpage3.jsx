import React from 'react';
import MainButton from '../../components/atoms/button';
function Splashpage3() {
    return ( 
    <>
     <div className='splash-content-container'>
                <h1 className='header-desc'>You are loved</h1>
                <h4 className='desc'> “Kamu tidak sendiri, kami semua menyayangimu.“</h4>
                <span className='micon-splash3'></span>
            </div>

            <footer className='splash-footer-container'> 
            <div className='button-position'>
            <MainButton linkPath="/login">Selanjutnya</MainButton>
            </div>
        </footer>
    </>
    );
}

export default Splashpage3;