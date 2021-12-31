import React from "react";
import ReactDOM from "react-dom";

import { Todos } from "./Todos";

import { data } from "./data";

console.log(data);

function Todo() {
  return (
    <ul>
        {
            data.map((item) => {
                return <Todos {...item} />;
            })
        }
    </ul>
  );
}

ReactDOM.render(<Todo />, document.getElementById("root"));
