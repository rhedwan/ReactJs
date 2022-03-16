import React from "react";
import ReactDom from "react-dom";

// CSS
import "./indexStyle.css";

// SetUp
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a family",
    author: "Shannon Olsen",
  },
];

const names = ["Ridwan", "Pidoxy", "Bayo"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
function BookList() {
  return <section className="bookList">{newName}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title} </h1>
      <h4> {author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
