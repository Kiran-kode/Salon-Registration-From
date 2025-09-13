import React from 'react';
import Hamburger from 'hamburger-react';
const Header = ({ isOpen, setOpen }) => {
  return (
    <section className='header w-full h-16 bg-white shadow-lg  top-0 z-0 '>
      <div className='flex h-full justify-between items-center px-4'>
        <Hamburger 
          toggled={isOpen} 
          toggle={setOpen}
          size={24}
          type="button"
          color="#374151"
        />
        <button className='bg-zinc-200 text-black font-semibold px-4 py-2 rounded hover:bg-zinc-300 transition-colors duration-200'>
          Logout
        </button>
      </div>
    </section>
  );
};

export default Header;