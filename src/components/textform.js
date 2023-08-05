import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    if (case1 === "Convert to uppercase") {
      let newtext = text.toUpperCase();
      setText(newtext);
      setCase("Convert to lowercase");
    }else if(case1 === "Convert to lowercase"){
        let newtext = text.toLowerCase();
        setText(newtext);
        setCase("Convert to uppercase");
    }
  };

  const handleTextClick = () => {
    let newtext = "";
    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("Onchange is triggered");
    setText(event.target.value);
  };
  const [case1, setCase] = useState("Convert to uppercase");
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={handleOnChange}
              onClick={handleTextClick}
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary my-3" onClick={handleClick}>
          {" "}
          {case1}
        </button>
      </div>
      <div className="conatiner" my-2>
        <h1>Text Summary</h1>
        <p>
          Your Entered text is of {text.split(" ").length} words and{" "}
          {text.length} characters.
        </p>
        <p>
          Slowest reader will take a max of {0.008 * text.split(" ").length}{" "}
          minutes
        </p>
        <h2 className="my-3"> Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
