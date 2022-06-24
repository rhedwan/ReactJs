import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer);
  };
  console.log(refContainer);

  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div ref={divContainer}>Hello world</div>
    </React.Fragment>
  );
};

export default UseRefBasics;
