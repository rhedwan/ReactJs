import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('Hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler) ;
  const [text, setText] = useState("randon title");
  const handler = () => {
    setText("Hello World");
  };
  return (
    <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handler}>
      Change title
    </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
