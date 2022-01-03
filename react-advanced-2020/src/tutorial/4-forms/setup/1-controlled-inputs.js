import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Hello world");
  };
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handlerSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" />
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
