import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log("Submit the form");
      const person = {
        firstName,
        email,
      };
      console.log(person);
      setPeople((prevPeople) => {
        console.log(prevPeople);
        return [...prevPeople, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("Empty values");
    }
  };
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handlerSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
