import { useState, useEffect } from "react";
import "./toDoBody.css";

function ToDoBody() {
  const [toDoList, setToDoList] = useState([]);

  const [toDoListItem, setToDoListItem] = useState("");

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const storedTasks = localStorage.getItem("toDoList");
    if (storedTasks) {
      setToDoList(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();

    const hour = now.getHours();
    const minutes = now.getMinutes();

    return `${hour}:${minutes}`;
  }

  function newListItem(e) {
    setToDoListItem(e.target.value);
  }

  function addItemToList(e) {
    e.preventDefault();
    if (toDoListItem === "") {
      return;
    }
    setToDoList([...toDoList, { text: toDoListItem, completed: false }]);
    setToDoListItem("");
  }

  function deleteToDoItem(index) {
    const updateTasks = toDoList.filter((el, i) => i !== index);
    setToDoList(updateTasks);
  }

  function completedStatus(index) {
    const updateList = [...toDoList];
    updateList[index].completed = !updateList[index].completed;
    setToDoList(updateList);
  }

  const now = new Date();

  const day = now.getDay();
  const date = now.getDate();

  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <main>
      <section className="todo-background">
        <div className="overlay">
          <h3>{`${daysOfWeek[day]} ${date}`}</h3>
          <h2>{currentTime}</h2>
        </div>
      </section>
      <section className="todo-list-body">
        <form>
          <input
            type="text"
            onChange={newListItem}
            value={toDoListItem}
            placeholder="Note..."
          />
          <div>
            <button onClick={addItemToList}>+</button>
          </div>
        </form>
        <div>
          <ul className="todo-list">
            {toDoList.map((item, index) => (
              <li className="todo-item" key={index}>
                <div>
                  <span
                    className={item.completed ? "checked" : "todo-item-title"}
                  >
                    {item.text}
                  </span>
                  <span className="todo-item-time"></span>
                </div>
                <div className="todo-item-icons">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {
                      completedStatus(index);
                    }}
                  />
                  <button
                    onClick={() => deleteToDoItem(index)}
                    className="todo-item-delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2 6H22M10 11V16M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147Z"
                        stroke="#FF4545"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ToDoBody;
