import React from "react";
import ReactDom from "react-dom";

// CSS
import "./indexStyle.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

const author = "Amelia Hepworth";
const Book = () => {
  const title = "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      />
      <h1>{title} </h1>
      <h4> {author.toUpperCase()}</h4>
      <p>{/* let x= 1 */}</p>
      <p>{6+5}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
