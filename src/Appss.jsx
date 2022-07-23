import React from 'react'
import './App.css'
import { useState } from 'react'
// import './svg.css'
import Roundbg from './components/atoms/roundbgSplash'

import { Link, Outlet, useNavigate } from 'react-router-dom'
import MainButton from './components/atoms/button'

function App() {
  const [status, setstatus] = useState(true)

  const navigate = useNavigate();

  function statusCheck() {
    
  }

  function run(){
    navigate("/splash1")
    setstatus(!status)
  }
  return (
  <>
  {!status && <div>
    
  <header>
    {/* <Roundbg /> */}
    <h1>Header stuff</h1>
  </header>
  
  <Outlet/>

  <footer>
    <h1 >footer stuff</h1>
  </footer>
  
  </div> }

  
  {status && <div><h1>SplashScreen</h1><button onClick={()=>{run()}}>go to splash 1</button></div>}
   
  
  </>
  )
}

export default App;
