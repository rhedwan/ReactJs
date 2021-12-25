import React from 'react';
import ReactDom from 'react-dom';

// Nested components and React Tools

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return <article>
  This is a book
  </article>
}


ReactDom.render(<BookList />, document.getElementById('root'));