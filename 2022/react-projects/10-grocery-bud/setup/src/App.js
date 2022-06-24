import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //Display alert
      showAlert(true, "Please enter value", "danger");
    } else if (name && isEditing) {
      // deal with editing

      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "value changed", "success");
    } else {
      // show alert
      showAlert(true, "Item added to list", "success");
      const newItems = [
        ...list,
        { title: name, id: new Date().getTime().toString() },
      ];
      setList(newItems);
      setName("");
    }
  };
  const clearList = () => {
    showAlert(true, "List cleared", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "Item removed from list", "success");
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <form className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery buds</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
