import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const PrivateRoutes = () => {
  // let auth = { token: false };
  let { isLogin } = useAuth();
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};
