import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    setPeople((oldPeople) =>{
      console.log(oldPeople);
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople
    });
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople(() => {
        return [];
      })}>
        Clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
