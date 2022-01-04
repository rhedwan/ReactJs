import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payLoad];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Add Successfully",
    };
  }
  // throw new Error("No Matching action, type");
  return {
    ...state,
    modalContent: "No Entries",
  };
};

const defaultState = {
  people: data,
  isModalOpen: true,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return dispatch({ type: "NO_VALUE" });
    const newItem = {
      id: new Date().getTime().toString(),
      name,
    };
    setName("");
    dispatch({ type: "ADD_ITEM", payLoad: newItem });
  };

  return (
    <React.Fragment>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
