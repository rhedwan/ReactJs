import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <React.Fragment>
      <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1>
    </React.Fragment>
  );
};

export default ShortCircuit;
