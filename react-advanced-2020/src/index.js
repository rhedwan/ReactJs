import React from "react";
import ReactDom from "react-dom";

// CSS
import "./indexStyle.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt=""
  />
);

const Title = () => <h1>I Love You to the Moon and Back </h1>;
const Author = () => <h4> Amelia Hepworth</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
