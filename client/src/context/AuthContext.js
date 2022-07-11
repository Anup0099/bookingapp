import { createContext, useReducer,useEffect } from "react";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: JSON.parse(localStorage.getItem("user"))||null,
        loading: false,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload, //user is the payload of the action which is the user object
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
      case "LOGOUT":
        return {
            user: null,
            loading: false,
            error: null,
        }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
//useeffect is used to run a function after the component is rendered and after the state changes   - this is used to store the user in local storage after the user logs in  or logs out
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
