import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alerts from "./components/Alerts";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // showing alerts
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Set Dark-Light mode ========================
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light");
  const changeMode = (md) => {
    if (md !== "oldMode") {
      if (md === "GRN") {
        setMode("success");
        document.body.style.backgroundColor = "#004123ff";
        document.body.style.color = "white";
        showAlert(`${md} mode enabled`, "Success");
        document.title = `${md} Mode`;
      } else if (md === "YLW") {
        setMode("warning");
        document.body.style.backgroundColor = "#503c00ff";
        document.body.style.color = "black";
        showAlert(`${md} mode enabled`, "Success");
        document.title = `${md} Mode`;
      } else if (md === "RED") {
        setMode("danger");
        document.body.style.backgroundColor = "#3a0006ff";
        document.body.style.color = "black";
        showAlert(`${md} mode enabled`, "Success");
        document.title = `${md} Mode`;
      } else if (md === "CYN") {
        setMode("info");
        document.body.style.backgroundColor = "#013d49ff";
        document.body.style.color = "black";
        showAlert(`${md} mode enabled`, "Success");
        document.title = `${md} Mode`;
      }
    } else {
      if (count === 0) {
        setMode("dark");
        document.body.style.backgroundColor = "#25303b";
        document.body.style.color = "white";
        showAlert("Dark mode enabled", "Success");
        document.title = `Dark Mode`;
        setCount(1);
      } else {
        setMode("light");
        document.title = `light Mode`;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light mode enabled", "Success");
        setCount(0);
      }
    }
  };

  // custom Dark Mode======================

  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Navbar
          title="TitleHere"
          features="About"
          mode={mode}
          changeMode={changeMode}
        />
        <Alerts alert={alert} />

        {/* Switch start here */}

        <Routes>
          <Route path="/about" element={<About mode={mode} />} />

          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextFrom
                  showAlert={showAlert}
                  heading="Enter your text to analyze."
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
