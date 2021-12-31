import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return <React.Fragment>
  {
    people.map( (person) => {
      return 'Hello'
    })
  }
  </React.Fragment>;
};

export default UseStateArray;
