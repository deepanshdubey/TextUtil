import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';

function App() {
  let [mode, setMode] = useState({
    bg: 'light',
    text: 'black'
  });

  const toggleMode = ()=> {
    console.log("Mode Toggled");

    if(mode.bg === 'light')
    {
      setMode({
        bg:'dark',
        text: 'white'
      });
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'rgba(var(--bs-dark-rgb),var(--bs-bg-opacity)) !important';
    }
    else{
      setMode({
        bg: 'light',
        text: 'black'});
        document.body.style.color = 'black';
    }
    console.log(mode.bg);
  }
  return (
   <>
   <Navbar  mode={mode.bg} text={mode.text} toggleMode={toggleMode} /> 
   <TextForm/>
   <About/>
   </>
  );
}
export default App;
