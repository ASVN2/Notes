import React from 'react';
import { Link } from 'react-router-dom';
// import Img from '../assets/intro.jpg';
import img from '../assets/Notebook-icon.png';

const Intro = () => {
  return (
    <div className="flex justify-between place-items-center h-screen">
      <div className="text flex-1">
        <h1 className="xl:text-6xl lg:text-6xl text-3xl font-semibold mb-4 main-title inline px-10">Hello There </h1>{' '}
        <span className="xl:text-6xl lg:text-6xl text-3xl hand">👋</span>
        <p className="xl:text-4xl lg:text-4xl text-2xl px-10 font-semibold mb-4 mt-4 main-title">You're in the right place</p>
        <p className="text-xl text-gray-200 px-10">
          Introducing our new website for note-taking! With our user-friendly platform, you can easily create, organize and access your notes from anywhere. No more worrying about
          losing your important notes, our website has got you covered. Sign up now and start keeping track of your thoughts and ideas with ease.
        </p>
        <Link
          className="m-auto lg:ml-10 xl:ml-10  py-4 bg-gray-700 hover:bg-blue-500  w-fit block min-w-[300px] rounded-lg mt-8 hover:scale-105 transition-all duration-300 text-center"
          to={'/login'}>
          Join us
        </Link>
      </div>
      <div className="image flex-1 md:flex lg:flex xl:flex  place-items-center justify-center hidden">
        <img src={img} className="max-w-[120%] rounded-md " alt="" />
      </div>
    </div>
  );
};

export default Intro;
