import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default function About() {
  const [open, setOpen] = useState(false);

  let [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  let [btnText, setBtnText] = useState("Enable Dark Mode");

  let toggleStyle = () => {
    console.log(myStyle.color);
    if (myStyle.color === "black") 
    {
      setStyle = {
        color: "white",
        backgroundColor: "black",
      };
      setBtnText = ("Enable Dark Mode");
    } 
    else 
    {
      setStyle = {
        color: "black",
        backgroundColor: "white",
      };
      setBtnText = ("Enable Light Mode");
    }
  };
  return (
    <>
      <div className="about-container" style={myStyle}>
        <h1>About Us</h1>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Text InsPecto is the text utility that will help you in analyzing,
            modifying, extracting & performing operations at any of your texts,
            documents, etc.
          </div>
        </Collapse>
        <div>
          The TextInspecto is helpful in getting an overall view of any document
          in the format of paragraph & you can have an idea the amount of time
          it will require.
        </div>
      </div>
      <Button onClick={toggleStyle} variant="primary">
        {btnText}
      </Button>
    </>
  );
}
