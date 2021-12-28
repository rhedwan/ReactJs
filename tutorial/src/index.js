import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Setup variables
const firstBook = {
  img :
  "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title : "I Love You to the Moon and Back !!!",
  author : "Amelia Hepworth"
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book title="random title" number={22} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));