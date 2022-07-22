import React from 'react'
import './App.css'
// import './svg.css'
import Roundbg from './components/atoms/roundbgSplash'

import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
  <>
  <header>
    <Roundbg />
    <h1>Header stuff</h1>
  </header>
  
  
  {/* <h1>Picture of love</h1> */}
  <Outlet/>
    <button><Link to="/splash">Goto Main Splash</Link></button>

  <footer>
    <h1 >footer stuff</h1>
  </footer>
  </>
  )
}

export default App;
