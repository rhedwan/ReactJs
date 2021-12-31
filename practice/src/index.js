import React from "react";
import ReactDOM from "react-dom";

import { Todos } from "./Todos";

import { data } from "./data";

console.log(data);

function Todo() {
  return (
    <div>
      {data.map((item) => {
        return <Todos {...item} />;
      })}
    </div>
  );
}

ReactDOM.render(<Todo />, document.getElementById("root"));
