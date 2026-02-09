import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  // return localStorage.getItem("token")
  //   ? children
  //   : <Navigate to="/login" />;

  const {token }=useContext(AuthContext);
  console.log("token",token);
  if(!token){
    return <Nagivate to ="/login"/>;
  }
  return children;
};

export default ProtectedRoute;
