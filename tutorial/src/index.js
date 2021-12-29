import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import {books} from './books'
import Book from './Book'

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));

/* 
Event in React
https://reactjs.org/docs/events.html
 */
