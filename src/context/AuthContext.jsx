import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    authUser,
    setAuthUser, //
    isLogin,
    setIsLogin,
  };

  return (
    <AuthContext.Provider values={values}>
      {props.children}
    </AuthContext.Provider>
  );
};
