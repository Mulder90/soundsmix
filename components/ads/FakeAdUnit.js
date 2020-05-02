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
    }}
  >
    ADUNIT
  </div>
);

export default FakeAdUnit;
