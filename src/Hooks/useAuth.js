import { useContext } from 'react';
import { Authcontext } from '../context/Authcontext';

const useAuth = () => {
  const context = useContext(Authcontext);
  return context;
};

export default useAuth;
