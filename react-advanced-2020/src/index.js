import React from "react";
import ReactDom from "react-dom";

// CSS
import "./indexStyle.css";

// SetUp
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
  title: "Our Class is a family",
  author: "Shannon Olsen",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title} </h1>
      <h4> {props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
