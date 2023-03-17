import { auth } from '../firebase/config';

//firebase imports
import { signOut } from 'firebase/auth';
import useAuth from '../Hooks/useAuth';

const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    signOut(auth)
      .then((response) => {
        console.log('user logged out');
        dispatch({ type: 'LOGOUT' });
        dispatch({ type: 'NOTE', payload: null });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};

export default useLogout;
