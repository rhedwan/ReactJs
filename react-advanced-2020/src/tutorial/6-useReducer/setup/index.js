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
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const updatedData = state.people.filter(
      (person) => person.id !== action.payLoad
    );
    return {
      ...state,
      people: updatedData,
      isModalOpen: false,
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
  isModalOpen: false,
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

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <React.Fragment>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
            <button
              className="btn"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payLoad: id })}
            >Remove</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
