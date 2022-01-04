import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payLoad];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item Add",
    };
  }
  console.log(state, action);
  throw new Error("No Matching action, type");
};

const defaultState = {
  people: [],
  isModalOpen: true,
  modalContent: "Hello World",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return dispatch({ type: "Random" });
    const newItem = {
      id: new Date().getTime().toString(),
      name,
    };
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
