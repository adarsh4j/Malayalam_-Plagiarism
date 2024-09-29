import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return isLoggedIn==="true"?<Outlet/>:<Navigate to="/signin"/>;
}

export default ProtectedRoute;