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
          return setError(!isError);
          // return isError ? setError(false) : setError(true);
        }}
      >
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
