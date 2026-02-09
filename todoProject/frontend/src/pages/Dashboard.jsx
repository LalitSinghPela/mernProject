import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../styles/Dashboard.css';
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
    <div className="dashContainer">
      <h2 className="title3">My Todos</h2>
      <form className="dashForm">
      <input className="input1" placeholder="New Todo"
             onChange={e => setTitle(e.target.value)} />
      <button className="input1" onClick={addTodo}>Add</button>
      </form>
    </div>
    <div className="dashResult">
      {todos.map(t => (
        <div class="result" key={t._id}>{t.title}</div>
      ))}
    </div>
    </>
  );
};

export default Dashboard;



