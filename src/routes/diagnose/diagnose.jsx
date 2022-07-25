import React from 'react'
import RoundbgMain from '../../components/atoms/roundbgMain';
import MainButton from '../../components/atoms/button';
import Number from '../../components/atoms/number';
import {getSplashData} from '../diagnose/datasplash'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Diagnose() {
    let navigate = useNavigate();
    const [AddId, setAddId] = useState(1);
    let SplashData = getSplashData();
    
    function incrementId(){
        let ariq = setAddId(++AddId);
    }

    return ( <>
        

    <div className='diag-container'>
        <header className='question-header'>
            <RoundbgMain/>

            <div className='question-container'>
                <h1 className='question-title'>Silahkan isi gejala di bawah ini dengan jujur ya.</h1>
            </div>
        </header>

        <div className="diag-content">

            <div className='number-container'>
                <Number>1</Number>
            </div>


            <div className='question-container2'>
                <h1 className='question-title color-question'>Apakah kamu mendengar suara yang aneh dari dalam kepalamu?</h1>
            </div>
        </div>

        <footer className='answer-container'>
            <div className='answer'>
                <MainButton>Tidak</MainButton>
                <MainButton incrementID={incrementId} linkPath={''+AddId}>Ya</MainButton>
                {/* <button onClick={()=>{navigate('/')}}>Goto Home</button> */}
            </div>
        </footer>
    </div>


    </> );
}

export default Diagnose;