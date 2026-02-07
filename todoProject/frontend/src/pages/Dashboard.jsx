import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const loadTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTodos(res.data);
  };

  const addTodo = async () => {
    await axios.post("http://localhost:5000/api/todos",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    loadTodos();
  };

  useEffect(() => { loadTodos(); }, []);

  return (
    <>
      <h2>My Todos</h2>
      <input placeholder="New Todo"
             onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map(t => (
        <div key={t._id}>{t.title}</div>
      ))}
    </>
  );
};

export default Dashboard;
