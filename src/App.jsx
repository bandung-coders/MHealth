import React from 'react'
import './App.css'
// import './svg.css'
import RoundbgSplash from './components/atoms/roundbgSplash'
import RoundbgMain from './components/atoms/roundbgMain'
import Button from './components/atoms/button'
import FeatureBox from './components/atoms/feature'
import Feature1Bg from './assets/feature-1.png'

import Input from './components/atoms/input'
import Select from './components/atoms/select'
import Option from './components/atoms/option';
import LoginButton from './components/atoms/loginButton'

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

    <Select  name="Anime" submitTo="test">
       <option value="Konsuba">Konosuba</option>
       <option value="FATE">Fate</option>
       <option value="86">86</option>
    </Select>

    <LoginButton>Mulai</LoginButton>

 



  </>
  )
}


export default App;
