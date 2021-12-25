import React from 'react';
import ReactDom from 'react-dom';

// Stateless functional component
// Always returns a JSX
function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

// const Greeting = () => {
//   return  React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
// };

ReactDom.render(<Greeting />, document.getElementById('root'));