  import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger aur close icons
import { IoPerson } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Login from '../../pages/userPages/Login';
import { useNavigate } from 'react-router-dom';
import  { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from './Button';

  

const Header = () => {
 let navigate = useNavigate();
    let handleClick = ()=>{
        navigate("/login")
    }

    let handleClickHome = ()=>{
      navigate("/")
    }
    let AbouthandleClick = ()=>{
        navigate("/about")
    }

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

      {/* Header for small screens */}
      <div className="w-full h-20 flex items-center px-4 justify-between border-b border-gray-400 md:px-4 md:flex md:items-center md:justify-between">
        {/* Logo (left side on all screens) */}
        <div className="w-15 h-14">
          <img
            src="https://cutxpress.life/asset/img/logo.svg"
            className="cursor-pointer hover:text-zinc-400"
            alt="Logo"  
          />
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>



      <div className="hidden md:flex w-full h-30 px-4 md:px-7 lg:px-19 items-center justify-between">
        {/* Navbar for large screens, also shown on medium screens with button */}
        <ul className="md:flex lg:flex gap-12">
          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            <Link to="/">Home</Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
          {/* <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            <Link to="/services">Services</Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li> */}



<li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
  <Link to="/services">Services</Link>

  {/* underline effect */}
  <span className="absolute left-0 bottom-0  h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
  
  {/* dropdown menu */}
  <ul className="absolute left-0 mt-2 w-45 bg-white   rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
    <li className="px-4 py-1 border-b text-zinc-400 text-sm hover:text-zinc-900">
      <Link to="/services/hair">Friseur Service By Hassan Salon</Link>
    </li>
    <li className="px-4 py-1 border-b text-zinc-400 text-sm hover:text-zinc-900">
      <Link to="/services/beauty">Beauty</Link>
    </li>
    <li className="px-4 py-1 border-b text-zinc-400 text-sm hover:text-zinc-900">
      <Link to="/services/seo">hair</Link>
    </li>
  </ul>
</li>

            


          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider" onClick={AbouthandleClick}>
            About Us
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            <Link to="/contact">Contact</Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
        </ul>

        {/* Right side: Button and logo text for large screens, button only for medium screens */}
        <div className="flex items-center gap-12 text-lg">
         
          <button className="w-55 h-10 text-sky-950 outline-2 border-cyan-700 hover:bg-cyan-800 hover:text-white hover:font-normal transition duration-200 ease-in " onClick={handleClick} >
            Become a Partner
          </button>
        </div>
      </div>

        {/* Center "logo" text for medium screens */}
        <div className="hidden md:flex w-50 h-17 items-center justify-evenly">
          <div> <IoPerson className='size-7.5' onClick={handleClick}/> </div>
          <div> <IoSearchOutline className='size-7.5'/> </div>
        </div>
      </div>

      {/* Mobile Menu (small screens) */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full flex-col items-center bg-white border-b border-gray-400 md:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-lg">
          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            <Link to="/">Home</Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            <Link to="/services">Services</Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
          <li className="cursor-pointer hover:text-zinc-400 relative group tracking-wider">
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-800 transform translate-y-2 opacity-0 transition-all duration-360 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </li>
        </ul>
       <Button/>
      </div>

     
    </>
  );
};

export default Header;