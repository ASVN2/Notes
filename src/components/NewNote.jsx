import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Firebase } from '../Hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { IoMdRemove } from 'react-icons/io';

const NewNote = ({ ryz, buttonHander, setryz }) => {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();
  const { addDocument, response } = Firebase('ntoes');
  const { user } = useAuth();

  const clickHandler = (e) => {
    e.preventDefault();
    addDocument({ title, note, uid: user.uid, createdAt: serverTimestamp() });

    if (!response.error) {
      setNote('');
      setTitle('');
    }
  };

  const hiddenHandler = () => {
    if (response.error) {
      setryz(true);
    }
  };

  return (
    <>
      {ryz && (
        <div className="new z-30">
          <div onClick={buttonHander} className=" overlay bg-[#00000014] h-screen w-screen absolute top-0 left-0 "></div>
          <div className="absolute border-2 border-white top-[50%] bg-[#ffffff8f]  w-[80%] xl:w-auto md:w-auto lg:w-auto p-4  pt-16 rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <form className=" max-w-[500px] w-full" onSubmit={(e) => clickHandler(e)}>
              <div onClick={buttonHander} className="xmark text-black cursor-pointer p-2 bg-red-200 absolute top-4 right-4">
                <IoMdRemove />
              </div>
              <label className="mb-4">
                <span className="block text-xl text-black">Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-white border border-black w-full outline-none rounded-sm p-1 text-black px-2"
                />
              </label>

              <label className="mt-2 block text-black">
                <span className="block text-xl">Note</span>
                <textarea
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="bg-white resize-none border border-black w-full h-36 outline-none rounded-sm p-1 text-gray-900 px-2 mb-4"
                />
              </label>

              <input onClick={hiddenHandler} className="block w-full cursor-pointer py-2 rounded-md bg-gray-300 text-black" type="submit" value="Add Note" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNote;
