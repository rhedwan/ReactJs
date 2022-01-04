import React, { useState, useContext } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PersonCentext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };
  const [people, setPeople] = useState(data);
  return (
    <PersonCentext.Provider
      value={{
        removePerson,
        people
      }}
    >
      <h3>Context API / useContent</h3>
      <List />
    </PersonCentext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonCentext);
  return (
    <React.Fragment>
      {people.map((person) => {
        return <SingePerson key={person.id} {...person} />;
      })}
    </React.Fragment>
  );
};

const SingePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonCentext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default ContextAPI;
