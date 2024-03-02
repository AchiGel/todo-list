import { useState } from "react";
import "./toDoBody.css";

function ToDoBody() {
  const [toDoList, setToDoList] = useState([]);

  const [toDoListItem, setToDoListItem] = useState("");

  function newListItem(e) {
    setToDoListItem(e.target.value);
  }

  function addItemToList(e) {
    e.preventDefault();
    if (toDoListItem === "") {
      return;
    }
    setToDoList([...toDoList, toDoListItem]);
    setToDoListItem("");
  }

  return (
    <main>
      <section className="todo-background"></section>
      <section className="todo-list-body">
        <form>
          <input type="text" onChange={newListItem} value={toDoListItem} />
          <div>
            <button onClick={addItemToList}>+</button>
          </div>
        </form>
        <div>
          <ul className="todo-list">
            {toDoList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ToDoBody;
