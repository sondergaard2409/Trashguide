// Imports modules and functions from react
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// Creates the AuthProvider component that manages authentication data
const AuthProvider = ({ children }) => {
  // Define a state variable loginData and a function setLoginData to update it
  const [loginData, setLoginData] = useState("");

  // Use the useEffect hook to run this code when children (components) change
  useEffect(() => {
    // Checks if a token exists in the sessionStorage
    if (sessionStorage.getItem("token")) {
      // If a token exists, it gets parsed and set as loginDatas state
      setLoginData(JSON.parse(sessionStorage.getItem("token")));
    }
  }, [children]);

  // Renders the AuthContext.Provider component to provide loginData and setLoginData to its children
  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Creates a custom hook called useAuth, that is used to access AuthContext data
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };