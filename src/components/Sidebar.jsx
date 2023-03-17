import React from 'react';
import Infobar from './Infobar';
import Newnote from './Newnote';
import Notes from './Notes';

const Sidebar = ({ docs, buttonHander }) => {
  return (
    <div className="w-[250px] rounded-lg my-6 relative h-[95vh] bg-[#06080e] p-2">
      <Newnote buttonHander={buttonHander} />
      <Notes docs={docs} />
      <Infobar />
    </div>
  );
};

export default Sidebar;
