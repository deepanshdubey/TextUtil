import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';


export default function TextForm() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = ' ';
    setText(newText);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container">
      
      
        <Form>
        <GrammarlyEditorPlugin clientId="client_Pr5vjUGCWsEZkQTvJNunhV">
          <textarea
            className="form-Control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
    </GrammarlyEditorPlugin>
          <br />
          <br />
          <Button type="submit" onClick={handleUpClick}>
            Convert to "UPPER-CASE"
          </Button>
          &nbsp;
          <Button type="submit" onClick={handleLowClick}>
            Convert to "lower-case"
          </Button>
          &nbsp;
          <Button type="submit" onClick={handleClearClick}>
            Clear text
          </Button>
          &nbsp;
          <Button type="submit" onClick={handleCopyClick}>
            Copy
          </Button>
        </Form>
      </div>
      <div className="container">
      <br />
        <h1>Your text Summary</h1>
        
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p> {0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <div className="preview">{text}</div>
      </div>
    </>
  );
}
