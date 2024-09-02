import React, { useState } from 'react';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="menuToggle" className="relative">
      <input
        id="checkbox"
        type="checkbox"
        className="hidden"
        checked={isOpen}
        onChange={handleToggle}
      />
      <label htmlFor="checkbox" className="toggle cursor-pointer w-10 h-10 block m-auto relative">
        <div className={`bar bar--top absolute left-0 right-0 h-1 rounded-sm bg-purple-600 transition-all duration-500 ease-in-out ${isOpen ? 'transform rotate-[-135deg] bottom-1/2' : 'bottom-2'}`}></div>
        <div className={`bar bar--middle absolute left-0 right-0 h-1 rounded-sm bg-purple-600 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 transform rotate-[-135deg] top-1/2' : 'top-1/2'}`}></div>
        <div className={`bar bar--bottom absolute left-0 right-0 h-1 rounded-sm bg-purple-600 transition-all duration-500 ease-in-out ${isOpen ? 'transform rotate-[-225deg] top-1/2' : 'top-8'}`}></div>
      </label>
    </div>
  );
};

export default MenuToggle;
