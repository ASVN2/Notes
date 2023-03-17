import React from 'react';
import { FiUser } from 'react-icons/fi';
import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';
import { Firebase } from '../Hooks/useFirebase';
import useLogout from '../Hooks/useLogout';

const Infobar = () => {
  const { user, note } = useAuth();
  const { delDoc } = Firebase('ntoes');
  const { logout } = useLogout();
  const { dispatch } = useAuth();

  const logoutHander = () => {
    logout();
  };

  const remHandler = async () => {
    delDoc(note.id);
    await dispatch({ type: 'NOTE', payload: null });
  };

  return (
    <div className="mt-4 rounded-md absolute bottom-0 w-[90%] mb-5">
      <div onClick={remHandler} className="user flex bg-gray-600  place-items-center gap-2 mb-2  p-2 rounded-md cursor-pointer hover:bg-gray-800 transition-all">
        <BsTrash3 />
        Remove Note
      </div>

      <div className="user flex bg-gray-500 place-items-center gap-2 mb-2  p-2 rounded-md cursor-pointer hover:bg-gray-600 transition-all">
        <FiUser />
        {user && user.email.lenght > 20 ? user.email : `${user.email.slice(0, 20)}...`}
      </div>

      <div onClick={logoutHander} className="user flex bg-gray-500  place-items-center gap-2  p-2 rounded-md cursor-pointer hover:bg-gray-600 transition-all">
        <MdOutlineLogout />
        Logout
      </div>
    </div>
  );
};

export default Infobar;
