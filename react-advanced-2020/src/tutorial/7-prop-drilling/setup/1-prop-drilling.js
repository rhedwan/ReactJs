import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        return (
          <SingePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </React.Fragment>
  );
};

const SingePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default PropDrilling;
