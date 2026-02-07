import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from '../styles/Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submit = async () => {
  //   const res = await axios.post("http://localhost:5000/api/auth/login", {
  //     email, password
  //   });
  //   login(res.data.token);
  // };
  const submit = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login",
      {
        email,
        password
      }
    );

    login(res.data.token);

  } catch (error) {
    alert("Login failed. Check email or password.");
    console.log(error);
  }
};

  return (
    <>
    <div class={styles.loginContainer}>
      
     
      <form  class={styles.loginForm} >
      <h2 class={styles.title}>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
             onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
      </form>
    </div>
    </>

  );
};

export default Login;
