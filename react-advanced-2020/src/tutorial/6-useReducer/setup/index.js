import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

import { reducer } from "./reducer";

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
      <button
        type="submit"
        className="btn"
        onClick={() => dispatch({ type: "CLEAR_ITEMS" })}
      >
        Clear Data
      </button>
      {state.people.map((person) => {
        const { id, name } = person;
        const inLineStyle = {
          display: "inline",
        };
        return (
          <div key={id}>
            <h4 style={inLineStyle}>{name}</h4>
            <button
              style={inLineStyle}
              className="btn"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payLoad: id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
