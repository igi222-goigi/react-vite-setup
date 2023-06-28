import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./middlewares/PrivateRoutes";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dahboard";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
