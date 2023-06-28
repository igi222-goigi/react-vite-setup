import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoutes = () => {
  let auth = { token: false }; // comming from context
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
