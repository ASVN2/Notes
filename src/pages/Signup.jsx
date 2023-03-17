import React, { useState } from 'react';
import logo from '../assets/Sheild-icon.png';
import img from '../assets/note-2.jpg';
import { Link, Navigate } from 'react-router-dom';
import google from '../assets/icon-google.png';
import { auth, provider } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

//firebase imports
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const googlehandler = () => {
    signInWithPopup(auth, provider).then((data) => {
      // window.location.reload(false);
      navigate('/home');
    });
  };

  const submithandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        // window.location.reload(false);
        navigate('/home');
      })
      .catch((error) => {
        if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          setError('Password should be at least 6 characters');
          throw new Error('Password should be at least 6 characters');
        } else if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
          setError('Oops This user already exists');
          throw new Error('Oops This user already exists');
        } else {
          setError(error.message);
          throw error.message;
        }
      });
  };

  return (
    <div className="flex justify-center xl:justify-between lg:justify-between place-items-center h-screen">
      <div className="image hidden xl:block lg:block">
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
            <span className="block">Username</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="outline-none  text-black p-1 px-2 rounded-sm w-full" type="text" name="" id="" />
          </label>

          <label className="mt-4 block">
            <span className="block">Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none text-black p-1 px-2 rounded-sm w-full" type="password" name="" id="" />
          </label>

          <input type="submit" className="block p-1 rounded-sm cursor-pointer hover:scale-95 hover:bg-gray-300 transition-all mt-6 bg-white text-black w-full" value="Login" />
          <p className="mt-4 text-red-300 font-bold">{error}</p>

          <div className="or text-center mt-4 relative ">Or</div>

          <div onClick={googlehandler} className="google flex bg-white p-2 justify-center cursor-pointer px-4 rounded-md place-items-center gap-2 mt-5">
            <img className="w-[35px]" src={google} alt="" />
            <p className="text-gray-600">continue with google</p>
          </div>

          <p className="mt-2 text-gray-300">
            You already have an acount{' '}
            <Link className="p-1 text-white capitalize" to={'/login'}>
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
