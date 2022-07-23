import React from 'react';
import { useNavigate } from 'react-router-dom'
import MainButton from '../../components/atoms/button';

function Splashpage1() {
    const navigate = useNavigate();
    return ( 
    <>
     <h1 className='header-desc'>Konsultasi Dengan Pakar</h1>
    <MainButton linkPath="/splash2">Selanjutnya</MainButton>
    </>
    );
}

export default Splashpage1;