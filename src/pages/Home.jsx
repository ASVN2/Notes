import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import img from '../assets/key.png';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import UseCollection from '../Hooks/UseCollection';
import NewNote from '../components/NewNote';

const Home = () => {
  const [ryz, setryz] = useState(false);
  const [slide, setSlide] = useState(true);

  const buttonHander = () => {
    setryz(!ryz);
  };

  const { user } = useAuth();
  const { docs, error } = UseCollection('ntoes');

  return (
    <div className="flex justify-between gap-16">
      <div className="sidebar hidden xl:block lg:block">
        <Sidebar docs={docs} buttonHander={buttonHander} />
      </div>
      <div
        className={
          slide
            ? `absolute z-10 left-[-100%] sidebarSlider transition-all  block xl:hidden lg:hidden `
            : `block xl:hidden lg:hidden absolute z-10 left-[0] sidebarSlider transition-all`
        }>
        <Sidebar docs={docs} buttonHander={buttonHander} />
      </div>
      <Content setSlide={setSlide} slide={slide} />

      <div className=" absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] w-full z-20 ">
        <NewNote ryz={ryz} setryz={setryz} buttonHander={buttonHander} />
      </div>
    </div>
  );
};

export default Home;
