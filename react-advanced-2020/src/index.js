import React from "react";
import ReactDom from "react-dom";

// CSS
import "./indexStyle.css";

// SetUp
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";
function BookList() {
  return (
    <section className="bookList">
      <Book job="developer" />
      <Book title="Random title" number={33} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title} </h1>
      <h4> {author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
