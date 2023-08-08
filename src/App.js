import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textform";
//import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let redChange = () => {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
  };
  let blueChange = () => {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
  };
  let greenChange = () => {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  };
  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "UDIT - Light Mode"
      // setInterval(() => {
      //   document.title = "Install Amplesavings Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Get Amplesavings Card Now"
      // }, 1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor =
        "rgb(" + [33, 37, 41].join(",") + ")";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      document.title = "UDIT - Dark Mode"
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
        redChange={redChange}
        blueChange={blueChange}
        greenChange={greenChange}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter Text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
