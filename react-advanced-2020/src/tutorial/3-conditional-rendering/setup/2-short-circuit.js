import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1>  
      {!text && <h1>Hello World</h1> }
    {text && <h1>Hello World 😊</h1> } */}

      <h1>{text || "Rhedwan"}</h1>
      <button
        className="btn"
        onClick={() => {
          return isError ? setError(false) : setError(true);
        }}
      >
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
    </React.Fragment>
  );
};

export default ShortCircuit;
