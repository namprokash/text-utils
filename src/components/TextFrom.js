import React, { useState } from "react";

const TextFrom = ({ heading = "Enter your heading here", mode, showAlert }) => {
  const [text, setText] = useState("");
  const upClick = () => {
    setText(text.toUpperCase());
  };
  const lowClick = () => {
    setText(text.toLowerCase());
  };
  const textArea = (e) => {
    setText(e.target.value);
  };
  // ===============================

  const emailFinder = () => {
    // let arryaWords = text.split(" ");
    // const matches = arryaWords.filter((words) => words.endsWith("@gmail.com"));
    // let emails = emails.join("\n");  // array formetting to text

    // ===================================
    const regEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const matches = text.match(regEx);

    if (matches) {
      // console.log(matches);
      let emails = matches.join("\n");
      setText(emails);
      showAlert(`${matches.length} Emails found !`, "Success");
    } else {
      showAlert("Email not found!", "Faild");
    }
  };

  const clr = () => {
    // console.log("Clear text");
    setText("");
  };
  const rmExtraSpaces = () => {
    // console.log("Clear text");
    setText(text.split(/\s+/).join(" "));
  };

  // ===================================

  const copyText = () => {
    // console.log("Clear text");
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard", "Success");
  };

  // =========================
  return (
    <>
      <div className="form-group">
        <h1
          htmlFor="textArea"
          className={`text-${mode !== "light" ? "light" : "dark"}`}
        >
          {heading}
        </h1>
        <textarea
          className={`form-control ${
            mode === "light" ? "bg-light text-dark" : "bg-secondary text-white"
          }`}
          id="textArea"
          rows="10"
          placeholder="TextHere"
          value={text}
          onChange={textArea}
        ></textarea>
      </div>
      <button
        type="button"
        className={`btn btn-${
          mode === "light" || mode === "dark" ? "primary" : mode
        } my-2 mx-1`}
        onClick={upClick}
      >
        UPPER
      </button>
      <button
        type="button"
        className={`btn btn-${
          mode === "light" || mode === "dark" ? "primary" : mode
        } my-2 mx-1`}
        onClick={lowClick}
      >
        lower
      </button>
      {/* find email */}
      <button
        type="button"
        className={`btn btn-${
          mode === "light" || mode === "dark" ? "primary" : mode
        } my-2 mx-1`}
        onClick={emailFinder}
      >
        Find Emails
      </button>

      {/* ====================== */}
      <button
        type="button"
        className={`btn btn-${
          mode === "light" || mode === "dark" ? "primary" : mode
        } my-2 mx-1`}
        // className={`btn btn-${mode === "light" ? "primary" : mode} my-2 mx-1`}
        onClick={rmExtraSpaces}
      >
        Remove extra spaces
      </button>
      {/* ================================= */}
      <button
        type="button"
        className={`btn btn-${
          mode === "light" || mode === "dark" ? "primary" : mode
        } my-2 mx-1`}
        // className={`btn btn-${mode === "light" ? "primary" : mode} my-2 mx-1`}
        onClick={copyText}
      >
        copy
      </button>

      {/* ======================= */}
      <button
        type="button"
        className={`btn btn-${
          mode === "light" || mode === "dark" ? "primary" : mode
        } my-2 mx-1`}
        onClick={clr}
      >
        Clear
      </button>

      {/* ========================= */}
      <div className="container">
        <h3 className={`my-3 text-${mode !== "light" ? "light" : "dark"}`}>
          Text summary
        </h3>
        <p className={`my-3 text-${mode !== "light" ? "light" : "dark"}`}>
          <span className="fs-4 fw-bold text-success">{text.length} </span>:
          Charatures and{" "}
          <span className="fs-4 fw-bold text-success">
            {text.length === 0
              ? text.trim().replace(/\s+/g, " ").split(" ").length - 1
              : text.trim().replace(/\s+/g, " ").split(" ").length}{" "}
          </span>
          : Words
        </p>
      </div>
    </>
  );
};

export default TextFrom;
