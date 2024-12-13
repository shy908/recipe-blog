import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const menuLinks = ['Home', 'Recipes', 'Categories', 'Upload', 'Users', 'Dashboard'];

  return (
    <nav className='sticky top-0 w-full z-50'>
      <div className="h-[10vh] flex justify-between items-center z-50 text-[#000] lg:py-5 px-4 lg:px-20 bg-[#ffffff]">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <a href="/">
            <span className="text-xl font-bold text-[#f1d10b]">African Recipes</span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row items-center flex-1">
          <div className="relative w-full lg:w-auto mr-4">
            <input
              type="text"
              className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f1d10b] transition-all"
              placeholder="Search Recipes"
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Links for Large Screens */}
        <div className="lg:flex flex-1 items-center justify-end hidden">
          <ul className="flex gap-8 text-[18px]">
            {menuLinks.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#f1d10b] border-b-2 border-[#f1d10b] hover:text-[#f1d10b] cursor-pointer' // Active link styles
                      : 'hover:text-[#f1d10b] transition-all duration-500 ease-in-out hover:border-b-2 border-[#f1f8e9] hover:border-[#f1d10b] cursor-pointer' // Inactive link styles
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-[#f1f8e9] text-bold"
          aria-label="Toggle menu"
          onClick={handleClick}
        >
          {click ? <FaTimes fill="#000" /> : <CiMenuFries fill="#000" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-[#f1d10b] overflow-hidden transition-all duration-500 ${
            click ? 'max-h-[500px] opacity-100 z-50' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="text-center text-xl py-20">
            {menuLinks.map((item) => (
              <li key={item} className="my-4">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="py-4 hover:border-b border-[#f1d10b] hover:bg-[#f1d10b] hover:rounded hover:text-white transition-all duration-500 ease-in-out"
                  onClick={closeMenu}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
