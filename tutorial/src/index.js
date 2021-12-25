import React from 'react';
import ReactDom from 'react-dom';

// Stateless functional component
// Always returns a JSX

/* 
NOTE: JSX Rules
1. return single element
2. div / section / article or fragment
3. use camelCase for html attributes
4. className instead of class
5. close every element
6. formatting
 */

// Nested components and React Tools

function Greeting() {
  return (
      <div >
        <Person />
        <Message />
      </div>
  );
};

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return  <p>This is my message</p>;
}

// const Greeting = () => {
//   return  React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
// };

ReactDom.render(<Greeting />, document.getElementById('root'));