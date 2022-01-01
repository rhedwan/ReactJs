import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h1>Building a Counter with useState</h1>
      <div>
        <h3>You have clicked this {count} times</h3>
        <button>Click Me</button>
      </div>
    </React.Fragment>
  );
}
