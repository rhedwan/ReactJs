import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Nested components and React Tools

function BookList() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      />
      <h1>I Love You to the Moon and Back </h1>
      <h4 style=
      {
        {
          color: '#617d98',
          fontSize : '0.75rem',
          marginTop: '0.25rem'
        }
      }> Amelia Hepworth
      </h4>;
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));