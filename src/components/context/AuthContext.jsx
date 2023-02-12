import React, { createContext, useContext, useState, useEffect} from "react";
import { onUserStateChange, logout, login } from "../../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user)=>{
      setUser(user);
    })
  }, []);

  return <AuthContext.Provider value={{user, logout, login}}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}