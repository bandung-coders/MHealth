import React from 'react'
import './App.css'
// import './svg.css'
import RoundbgSplash from './components/atoms/roundbgSplash'
import RoundbgMain from './components/atoms/roundbgMain'
import Button from './components/atoms/button'
import FeatureBox from './components/atoms/feature'
import Feature1Bg from './assets/feature-1.png'

import Splashpage1 from "./routes/splash/splashpage1";
import Splashpage2 from "./routes/splash/splashpage2";
import Splashpage3 from "./routes/splash/splashpage3";

import Input from './components/atoms/input'
import Select from './components/atoms/select'
import Option from './components/atoms/option';
import LoginButton from './components/atoms/loginButton'
// import Number from './components/atoms/number'

// import DiagQna from './routes/diagnose/diagQna'
import MainButton from './components/atoms/button';
import Number from './components/atoms/number';

import Splashimg1 from './components/atoms/splashimg1'

import { Link, Outlet } from 'react-router-dom'
import './components/atoms/assetsvg.css'

function App() {
  return (
    <>
    {/* <span className='micon-splash2'></span>
    <span className='micon-splash3'></span> */}

    {/* <Splashpage1/> */}

    <h1>splashscreem</h1>
    <MainButton linkPath="/splash">Test</MainButton>
   
   

  </>
  )
}


export default App;
