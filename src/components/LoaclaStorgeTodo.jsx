import React, { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const addTask = () => {
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Todo App</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
