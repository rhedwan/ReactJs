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

function Greeting() {
  return (
      <div className = ''>
        <h1>Hello World</h1>
        <ul>
          <li>
            <a href="#"> Hello World</a>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
  );
};

// const Greeting = () => {
//   return  React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
// };

ReactDom.render(<Greeting />, document.getElementById('root'));