import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import {books} from './books'

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // Attributes, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Refrence Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

/* 
Event in React
https://reactjs.org/docs/events.html
 */
