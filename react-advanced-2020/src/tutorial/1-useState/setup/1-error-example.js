import React from "react";

const ErrorExample = () => {
  let title = "Randon Title";
  const  handleClick = () => {
    console.log(title);
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
