import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Setup variables
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back !!!",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a family",
    author: "Shannon Olsen",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
