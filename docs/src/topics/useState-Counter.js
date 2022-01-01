import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(2);
  return (
    <React.Fragment>
      <h1>Building a Counter with useState</h1>
      <div>
        <h3>You have clicked the button {count} times 😉</h3>
        <button
          onClick={() => {
            setCount(count * count);
          }}
        >
          Click Me
        </button>
      </div>
    </React.Fragment>
  );
}
