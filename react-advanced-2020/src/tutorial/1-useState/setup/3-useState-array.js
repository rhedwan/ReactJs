import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {

  }
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove item
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
