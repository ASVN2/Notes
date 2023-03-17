import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase/config';

export const Authcontext = createContext();

const AuthcontextReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'SIGNUP':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { user: action.payload, isReady: true };
    case 'NOTE':
      return { ...state, note: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthcontextReducer, {
    user: null,
    isReady: false,
    note: null,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  return <Authcontext.Provider value={{ ...state, dispatch }}>{children}</Authcontext.Provider>;
};
