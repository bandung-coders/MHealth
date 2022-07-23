import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import App from "./Appss";
import Apps from "./App";

// import SplashScreen from './routes/splash/splashScreen'
import Splash from './routes/splash/splash'

import Splashpage1 from "./routes/splash/splashpage1";
import Splashpage2 from "./routes/splash/splashpage2";
import Splashpage3 from "./routes/splash/splashpage3";

import LoginPage from "./routes/datadiri/login";
import HomePage from "./routes/homepage/homePage";
import HomeProfile from "./routes/homepage/homeProfile";
import Diagnose from "./routes/diagnose/diag";








const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>

        <Route path="splash1" element={<Splashpage1/>}/>
        <Route path="splash2" element={<Splashpage2/>}/>
        <Route path="splash3" element={<Splashpage3/>}/>

        <Route path="login" element={<LoginPage/>}/>
        <Route path="homepage" element={<HomePage/>}/>
        <Route path="profile" element={<HomeProfile/>}/>
        <Route path="diagnose" element={<Diagnose/>}/>


         

        
      </Route>

    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
