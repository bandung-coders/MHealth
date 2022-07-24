import React from 'react'
import RoundbgMain from '../../components/atoms/roundbgMain';
import MainButton from '../../components/atoms/button';
import Number from '../../components/atoms/number';

function diagQna(props) {
    return ( <>

    <div className='diag-container'>
        <header className='question-header'>
            <RoundbgMain/>
        </header>

        <div className='number-container'>
            <Number>1</Number>
        </div>

        <div className='question-container'>
            <h1 className='question-title'>Silahkan isi gejala di bawah ini dengan jujur ya.</h1>
        </div>

        <div className='question-container2'>
            <h1 className='question-title color-question'>Apakah kamu mendengar suara yang aneh dari dalam kepalamu?</h1>
        </div>

        <footer className='answer-container'>
            <div className='answer'>
                <MainButton linkPath={'/'+23}>Ya</MainButton>
                <MainButton>Tidak</MainButton>
            </div>
        </footer>
    </div>


    </> );
}

export default diagQna;