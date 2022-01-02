import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <React.Fragment>
      <h2>Window</h2>
      <h2>{size} PX</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
