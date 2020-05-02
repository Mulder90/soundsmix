import React from "react";

const FakeAdUnit = ({ width, height }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width,
      height,
      background: "red",
      margin: "0 auto",
      minWidth: "200px",
      minHeight: "200px",
    }}
  >
    ADUNIT
  </div>
);

export default FakeAdUnit;
