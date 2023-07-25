import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  let [mode, setMode] = useState({
    bg: "light",
    text: "black",
  });

  const toggleMode = () => {
    console.log("Mode Toggled");

    if (mode.bg === "light") {
      setMode({
        bg: "dark",
        text: "white",
      });
      document.body.style.color = "white";
      document.body.style.backgroundColor =
        "rgba(var(--bs-dark-rgb),var(--bs-bg-opacity)) !important";
    } else {
      setMode({
        bg: "light",
        text: "black",
      });
      document.body.style.color = "black";
    }
    console.log(mode.bg);
  };
  return (
    <>
      <Navbar mode={mode.bg} text={mode.text} toggleMode={toggleMode} />

      <Router>
          <Routes>
            <Route exact path="/" element={<TextForm/>}/>
            <Route exact path="/about" element={ <About/>}/>
          </Routes>
      </Router>
    </>
  );
}
export default App;
