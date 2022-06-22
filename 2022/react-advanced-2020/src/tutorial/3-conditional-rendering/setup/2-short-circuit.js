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
      {/* <h2>Value: {firstValue} </h2>
      <h2>Value: {secondValue} </h2> */}
      {/* <h2>{text || "Sanusi"}</h2> */}
      <button className="btn" onClick={() => setError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div className="">
          <h2>there is no error</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
