import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Setup variables
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back !!!";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";

  function BookList() {
  return (
    <section className="bookList">
      <Book job= "developer" />
      <Book title= 'random title' number={22} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img
        src = {img}
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));