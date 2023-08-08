import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textform";
//import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = 'rgb('+[33,37,41].join(',')+')';
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        head1="Home"
        head2="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
