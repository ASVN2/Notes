import React, { useState } from 'react';
import logo from '../assets/Sheild-icon.png';
import img from '../assets/note.jpg';
import google from '../assets/icon-google.png';
import { Link } from 'react-router-dom';
import { auth, provider } from '../firebase/config';

//firebase imports
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useAuth();

  const submithandler = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        dispatch({ type: 'LOGIN', payload: data.user });
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          setError('No user found with that email address.');
          throw new Error('No user found with that email address.');
        } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
          setError('Incorrect password. Please try again.');
          throw new Error('Incorrect password. Please try again.');
        } else {
          setError(error.message);
          throw error.message;
        }
      });
  };

  const googlehandler = () => {
    signInWithPopup(auth, provider).then((data) => {});
  };

  return (
    <div className="flex xl:justify-between lg:justify-between justify-center place-items-center h-screen">
      <div className="image hidden xl:block lg:block ">
        <img className="rounded-xl" src={img} alt="" />
      </div>
      <div className="form">
        <form onSubmit={submithandler}>
          <div className="logo mb-6">
            <img className="w-[50%] m-auto" src={logo} alt="" />
            <p className=" text-center text-xl ">Log in With </p>
          </div>
          <label>
            <span className="block">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none text-black p-1 px-2 w-full rounded-sm" name="" id="" />
          </label>

          <label className="mt-4 block">
            <span className="block">Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none text-black p-1 px-2 rounded-sm w-full" type="password" name="" id="" />
          </label>

          <input type="submit" className="block p-1 rounded-sm cursor-pointer hover:scale-95 hover:bg-gray-300 transition-all mt-6 bg-white text-black w-full" value="Login" />
        </form>
        <p className="mt-4 text-red-300 font-bold">{error}</p>

        <div className="or text-center mt-4 relative ">Or</div>

        <div onClick={googlehandler} className="google flex bg-white p-2 justify-center cursor-pointer px-4 rounded-md place-items-center gap-2 mt-5">
          <img className="w-[35px]" src={google} alt="" />
          <p className="text-gray-600">continue with google</p>
        </div>

        <p className="mt-2 text-gray-300">
          You don't have an acount{' '}
          <Link className="p-1 text-white capitalize" to={'/signup'}>
            create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
