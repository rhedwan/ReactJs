import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

  });
  console.log(size);
  return (
    <React.Fragment>
      <h2>Window</h2>
      <h2>{size} PX</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
