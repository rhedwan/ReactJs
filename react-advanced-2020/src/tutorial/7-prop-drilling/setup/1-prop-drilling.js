import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        return <SingePerson key={person.id} person={person} />;
      })}
    </React.Fragment>
  );
};

const SingePerson = ({ id, name }) => {
  return (
    <div className="item">
      <h4>Single Item</h4>
    </div>
  );
};
export default PropDrilling;
