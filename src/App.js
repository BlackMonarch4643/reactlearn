import "./App.css";
import Navbar from "./components/Navbar";
//import TextForm from "./components/textform";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" head1="Home" head2="About" />
      {/* <div className="container my-3">
        <TextForm heading="Enter Text to analyze below"/>
      </div> */}
      <About />
    </>
  );
}

export default App;
