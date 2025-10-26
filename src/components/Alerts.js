import React from "react";

export default function Alerts({ alert }) {
  return (
    alert && (
      <div
        className={`alert alert-${
          alert.type === "Success" ? "success" : "warning"
        }`}
        role="alert"
      >
        <strong>{alert.type}</strong> : {alert.msg}
      </div>
    )
  );
}
