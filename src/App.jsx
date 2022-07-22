import React from 'react'
import './App.css'
// import './svg.css'
import RoundbgSplash from './components/atoms/roundbgSplash'
import RoundbgMain from './components/atoms/roundbgMain'
import Button from './components/atoms/button'
import FeatureBox from './components/atoms/feature'
import Feature1Bg from './assets/feature-1.png'

import Input from './components/atoms/input'

import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
  <>
    {/* <RoundbgSplash/>
    <RoundbgMain/> */}



    <Button linkPath="#">Selanjutnya</Button>
    <FeatureBox image={Feature1Bg}></FeatureBox>
    <Input type="" placeholder="Stuff" submitTo="#"/>
    <Input type="number" placeholder="ariq" submitTo="#"/>
  </>
  )
}


export default App;
