import React from 'react';
import { GoNote } from 'react-icons/go';
import useAuth from '../Hooks/useAuth';

const Notes = ({ docs }) => {
  const { dispatch } = useAuth();

  const noteHander = (note) => {
    let truncatedText = note.slice(0, 30);
    if (note.length > 30) {
      truncatedText += '...';
    }
    return truncatedText;
  };

  const noteHanlder = async (note) => {
    await dispatch({ type: 'NOTE', payload: note });
  };

  return (
    <div className="mt-8 thisnotes  h-[66vh] overflow-y-scroll">
      {docs &&
        docs.map((note) => {
          return (
            <h2 onClick={() => noteHanlder(note)} className="flex place-items-center gap-2 p-2 px-4 hover:bg-gray-700 rounded-md my-1 transition-all cursor-pointer" key={note.id}>
              <GoNote /> {note.title.length > 15 ? `${note.title.slice(0, 15)}...` : note.title}
            </h2>
          );
        })}
    </div>
  );
};

export default Notes;
