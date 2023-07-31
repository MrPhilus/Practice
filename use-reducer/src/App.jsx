import { useReducer } from "react";
import "./App.css";
import toDoReducer from "./reducer/toDoReducer";

const initialState = {
  list: [],
  inputText: "",
  isEditing: false,
  showCompleted: false,
  showPending: false,
};

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const { list, inputText, isEditing, showCompleted, showPending } = state;

  function deleteItem(taskId) {
    dispatch({ type: "DELETE_ITEM", payload: taskId });
  }

  function addList() {
    dispatch({ type: "ADD_LIST" });
  }

  function initiateEdit(taskId, theTask) {
    dispatch({ type: "INITIATE_EDIT", payload: { taskId, theTask } });
  }

  function editList() {
    dispatch({ type: "EDIT_LIST" });
  }

  function initiateListing() {
    isEditing ? editList() : addList();
  }

  function toggleCompleted(taskId) {
    dispatch({ type: "TOGGLE_COMPLETED", payload: taskId });
  }

  function displayAll() {
    dispatch({ type: "DISPLAY_ALL" });
  }

  function displayCompleted() {
    dispatch({ type: "DISPLAY_COMPLETED" });
  }

  function displayPending() {
    dispatch({ type: "DISPLAY_PENDING" });
  }

  return (
    <div className="App">
      <div className="inputArea">
        <input
          className="input"
          type="text"
          value={inputText}
          onInput={(e) =>
            dispatch({ type: "SET_INPUT_TEXT", payload: e.target.value })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              initiateListing();
            }
          }}
        />
        <button className="inputButton" onClick={initiateListing}>
          {isEditing ? "Done" : "➕"}
        </button>
      </div>
      {list
        .filter((item) => {
          if (showCompleted) {
            return item.completed;
          } else if (showPending) {
            return !item.completed;
          } else {
            return true;
          }
        })
        .map((item) => (
          <article className="listItems" key={item.id}>
            <button
              className="editButton"
              onClick={() => toggleCompleted(item.id)}
            >
              ✔️
            </button>
            <p className={item.completed ? "completed" : "taskItem"}>
              {item.task}
            </p>

            <div className="edit">
              <button
                className="editButton"
                onClick={() => initiateEdit(item.id, item.task)}
              >
                ✎
              </button>
              <button
                className="editButton"
                onClick={() => deleteItem(item.id)}
              >
                ❌
              </button>
            </div>
          </article>
        ))}
      <div className="filters">
        <button onClick={displayAll}>All</button>
        <button onClick={displayPending}>Pending</button>
        <button onClick={displayCompleted}>Completed</button>
      </div>
    </div>
  );
}

export default App;
