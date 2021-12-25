import React from 'react';
import ReactDom from 'react-dom';

// Nested components and React Tools

function BookList() {
  return (
      <section >
       This is a booklist
      </section>
  );
};




ReactDom.render(<BookList />, document.getElementById('root'));