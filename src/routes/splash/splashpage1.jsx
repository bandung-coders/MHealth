import React from 'react';
import MainButton from '../../components/atoms/button';
function Splashpage1() {

   

    return ( 
        <>
    
        <div className='splash-content-container'>
            <h1 className='header-desc'>Konsultasi Dengan Pakar</h1>
            <span className='micon-splash1'></span>
            <h4 className='desc'> “ Meski aku tumbuh dengan luka dari orang tua, aku akan tetap berusaha membuat mereka bangga. “</h4>
        </div>

        <footer className='splash-footer-container'> 
        <div className='button-position'>
        <MainButton linkPath="/splash/2">Selanjutnya</MainButton>
        </div>
    </footer>
   
    </>
    );
}

export default Splashpage1;