import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0) ;
  return (
    <React.Fragment>
      <section style={
        {
          margin:'4rem 0',
        }
      }>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn">Decrease</button>
      <button className="btn">Increase</button>
      <button className="btn">Reset</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
