import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("Hello World");
  };
  const compleHandler = (author) => console.log(author);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
      <button type="button" onClick={clickHandler}>
        Click
      </button>
      <button type="button" onClick={() => compleHandler(author)}>
        Complex Example
      </button>
    </article>
  );
};

export default Book;
