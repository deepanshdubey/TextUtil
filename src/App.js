import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';

function App() {
  let [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    console.log("Mode Toggled");

    if(mode === 'light')
    {
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
   <>
   <Navbar title= "Text Inspecto"  mode={mode} /> 
   <TextForm/>
   <About/>
   </>
  );
}
export default App;
