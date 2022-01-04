export const reducer = (state, action) => {
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
  if (action.type === "CLEAR_ITEMS") {
    return {
      ...state,
      people: [],
      isModalOpen: true,
      modalContent: "Cleared Successfully",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      modalContent: "No Entries",
      isModalOpen: true,
    };
  }
};
