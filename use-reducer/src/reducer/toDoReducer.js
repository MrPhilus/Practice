const toDoReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case "ADD_LIST":
      if (state.inputText !== "") {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: Math.floor(Math.random() * 300000),
              task: state.inputText,
              completed: false,
            },
          ],
          inputText: "",
        };
      }
      return state;
    case "INITIATE_EDIT":
      return {
        ...state,
        isEditing: true,
        editId: action.payload.taskId,
        inputText: action.payload.theTask,
      };
    case "EDIT_LIST":
      const newMap = state.list.map((item) =>
        item.id === state.editId ? { ...item, task: state.inputText } : item
      );
      return {
        ...state,
        list: newMap,
        inputText: "",
        isEditing: false,
        editId: "",
      };
    case "TOGGLE_COMPLETED":
      const markedDone = state.list.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      return { ...state, list: markedDone };
    case "DISPLAY_ALL":
      return { ...state, showCompleted: false, showPending: false };
    case "DISPLAY_COMPLETED":
      return { ...state, showCompleted: true, showPending: false };
    case "DISPLAY_PENDING":
      return { ...state, showCompleted: false, showPending: true };
    case "SET_INPUT_TEXT":
      return { ...state, inputText: action.payload };
    default:
      return state;
  }
};

export default toDoReducer;
