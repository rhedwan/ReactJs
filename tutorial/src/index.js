import React from 'react';
import ReactDom from 'react-dom';

// Stateless functional component
// Always returns a JSX
// function Greeting() {
//   return  <h4>this is Ridwan and this my very first component!!</h4>;
// };

const Greeting = () => {
  return  React.createElement('h4', null, 'Hello World. this is Ridwan and this my very first component!!');
};

ReactDom.render(<Greeting />, document.getElementById('root'));