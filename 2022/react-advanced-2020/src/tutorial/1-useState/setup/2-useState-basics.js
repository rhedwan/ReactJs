import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("randon title");
  const handleClick = () => {
    if (text === "randon title") setText("Hello World");
    else setText("randon title");
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
