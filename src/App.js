import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import About from './components/About';
import Educations from './components/Educations';
import Certifications from './components/Certifications';
import Header from './components/Header';
import Works from './components/Works';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []); 

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Header/>
            <About/>
            <Works/>
            <Educations/>
            <Certifications/>
        </div>
    );
}

export default App;
