import React from "react";
import ReactDom from "react-dom";

// CSS
import "./indexStyle.css";

// SetUp
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log("It the h1 element")}>{title} </h1>
      <h4> {author}</h4>
      <button type="buuton" onClick={clickHandler}>
        Refrence Example
      </button>
      <button type="button" onClick={() =>complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
