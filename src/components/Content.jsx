import React from 'react';
import useAuth from '../Hooks/useAuth';
import { SlMenu } from 'react-icons/sl';

const Content = ({ setSlide, slide }) => {
  const { note } = useAuth();

  return (
    <div className="bg-gray-900 flex-1 relative rounded-lg h-[95vh] thisnotes overflow-y-scroll my-6 p-16">
      <span onClick={() => setSlide(!slide)} className="menu absolute top-5 right-5 bg-[#fff] block xl:hidden lg:hidden md:hidden text-black p-3 rounded-full">
        <SlMenu />
      </span>
      <h2 className="text-2xl capitalize">{note ? note.title : <p className=" capitalize text-gray-200">No specific note ✨</p>}</h2>
      <div className="note relative">
        <div className="line h-[100%] absolute left-0 top-0 w-[5px] rounded-md bg-gray-200"></div>
        <p className="mt-8 ml-6 text-gray-400 ">{note && note.note}</p>
      </div>
    </div>
  );
};

export default Content;
