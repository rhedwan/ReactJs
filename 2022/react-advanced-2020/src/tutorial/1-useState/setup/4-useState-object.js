import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Bola",
    age: 45,
    message: "Random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "helo world" });
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
