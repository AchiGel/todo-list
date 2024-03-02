import "./toDoBody.css";

function ToDoBody() {
  return (
    <main>
      <section className="todo-background"></section>
      <section className="todo-list-body">
        <form>
          <input type="text" />
          <div>
            <button>+</button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
              >
                <path
                  d="M10.4 0.700002C10 0.300002 9.40005 0.300002 9.00005 0.700002L5.50005 4.2L2.00005 0.700002C1.60005 0.300002 1.00005 0.300002 0.600049 0.700002C0.200049 1.1 0.200049 1.7 0.600049 2.1L4.80005 6.3C5.00005 6.5 5.20005 6.6 5.50005 6.6C5.80005 6.6 6.00005 6.5 6.20005 6.3L10.4 2.1C10.8 1.7 10.8 1.1 10.4 0.700002Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
        <div>
          <ul className="todo-list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ToDoBody;
