// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// props can be any name
const Navbar = ({
  title = "HarryReact",
  features = "React",
  changeMode,
  mode,
}) => {
  // const tes = (md) => {
  //   changeMode(md);
  // };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          mode === "light" ? "light" : "dark"
        } bg-${mode === "light" ? "light" : "dark"} border-bottom border-${
          mode === "light" ? "light" : "dark"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {features}
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-success mx-3"
            onClick={() => changeMode("GRN")}
          >
            GRN
          </button>
          <button
            type="button"
            className="btn btn-danger mx-3"
            onClick={() => changeMode("RED")}
          >
            RED
          </button>
          <button
            type="button"
            className="btn btn-warning mx-3"
            onClick={() => changeMode("YLW")}
          >
            YLW
          </button>
          <button
            type="button"
            className="btn btn-info mx-3"
            onClick={() => changeMode("CYN")}
          >
            CYN
          </button>
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={() => changeMode("oldMode")}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />

            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Navbar.propTypes = {
//   title: PropTypes.string,
// };

export default Navbar;
