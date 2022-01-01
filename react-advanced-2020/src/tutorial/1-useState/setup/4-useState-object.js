import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  // console.log(person);
  const changeMesage = () => {
    setPerson({...person, message : 'new message' });
  }
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMesage}>
        changeMesage
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
