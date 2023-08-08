import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  let alagMode = props.mode === "dark" ? "light" : "dark";
  let ModeName = props.mode === "dark" ? "Enable lightMode" : "Enable DarkMode";
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-items">
              <a className="nav-link active" aria-current="page" href="/">
                {props.head1}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                href="/"
              >
                {props.head2}
              </a>
            </li>

            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }} onClick={props.redChange}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    backgroundColor: "Red",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></div>
                <p className="my-2 mx-2 " style={{color:"black"}}>RED</p>
              </div>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }} onClick={props.blueChange}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    backgroundColor: "Blue",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></div>
                <p className="my-2 mx-2" style={{color:"black"}}>BLUE</p>
              </div>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }} onClick={props.greenChange}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    backgroundColor: "Green",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></div>
                <p className="my-2 mx-2" style={{color:"black"}}>GREEN</p>
              </div>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${alagMode} d-flex`}
            style={{ flex: "none" }}
          >
            <input
              className="form-check-input  my-auto"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label my-auto mx-3"
              htmlFor="flexSwitchCheckChecked"
            >
              {ModeName}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  head1: propTypes.string.isRequired,
  head2: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Enter Title",
  head1: "Home Here",
  head2: "About Here",
};
