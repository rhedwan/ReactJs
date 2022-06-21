import React from "react";
// import ReactDOM from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";
// v18
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

const BookList = () => {
  // return React.createElement("h1", {}, "Hello world");
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

root.render(<BookList />);

// ReactDOM.render(<Greeting />, document.getElementById("root"));
/*
  <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
*/
