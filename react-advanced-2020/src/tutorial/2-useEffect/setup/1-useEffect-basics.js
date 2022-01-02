import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call Use effect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  useEffect(() => {
    console.log("Hello World");
  }, []);
  console.log("Render Component");
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
