import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

import SplashPage1 from "./splashpage1";
import SplashPage2 from "./splashpage2";
import SplashPage3 from "./splashpage3";



function Splash() {

    const { splashId } = useParams()

    return ( 
    <>
    {/* <h1 className="'+{splashId}+'">LOL #{splashId}</h1> */}
    <Routes>
        <Route path="1" element={<SplashPage1/>}/>
        <Route path={splashId} element={<SplashPage2/>}/>
        <Route path={splashId} element={<SplashPage3/>}/>
    </Routes>
    </>
    );
}

export default Splash;