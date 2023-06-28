import { useAuth } from "../context/AuthContext";

export const Login = () => {
  // const { setIsLogin } = useAuth();
  // setIsLogin(true);
  const handleLogin = () => {
    // setIsLogin(true);
  };
  return <button onClick={handleLogin}>Login</button>;
};
