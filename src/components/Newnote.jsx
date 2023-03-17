import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Newnote = ({ buttonHander }) => {
  return (
    <div className="mt-5 ">
      <button onClick={buttonHander} className="w-full flex place-items-center gap-1 bg-gray-700 p-2 px-6 hover:bg-slate-500 transition-all rounded-md">
        <AiOutlinePlus />
        New Note
      </button>
    </div>
  );
};

export default Newnote;
