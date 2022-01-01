import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMesage = () => {
    setMessage("Hello World");
  }
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMesage}>
        Change Mesage
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
