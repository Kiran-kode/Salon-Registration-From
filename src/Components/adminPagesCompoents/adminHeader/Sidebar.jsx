import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaUsers, FaUserTie, FaTasks, FaCalendarCheck } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
const Sidebar = ({ isOpen }) => {
  const menu = [
    { id: 1, label: 'Dashboard', icon: <AiFillDashboard />, path: '/admin/dashboard' },
    { id: 2, label: 'Salons', icon: <GiShop />, path: '/admin/salons' },
    { id: 3, label: 'Users', icon: <FaUsers />, path: '/admin/users' },
    { id: 4, label: 'Staff', icon: <FaUserTie />, path: '/admin/staff' },
    { id: 5, label: 'Services', icon: <FaTasks />, path: '/admin/services' },
    { id: 6, label: 'Bookings', icon: <FaCalendarCheck />, path: '/admin/bookings' }
  ]
  const secondmenu = [
    { id: 1, label: 'Settings', icon: <IoSettingsSharp /> },

  ];
  return (
    <aside
      // flex-shrink-0 keeps sidebar width while main content shrinks
      className={`flex-shrink-0 bg-white border-r border-gray-200 shadow transition-[width] duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'w-54' : 'w-16'}`}
      aria-hidden={!isOpen}
    >
      <div className="pt-7 h-full flex flex-col">
        <div className="px-4 py-3">
          {isOpen ? <h2 className="text-xl font-bold text-cyan-800 ">Admin Panel</h2>
            : <div className="h-6" />}
        </div>
        <nav className="flex w-full  ">
          <ul className="p-2 space-y-1 w-full flex flex-col gap-4 ">
            {isOpen && <p className='text-gray-400 px-3 font-semibold '>Admin</p>}
            {menu.map(item => (
              <li className='hover:text-white ' key={item.id}>
                <Link to={item.path}>
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-3 py-2 rounded transition-all duration-300 hover:bg-gray-500 transition-hover hover:text-white text-left text-cyan-700 "
                  >
                    <span className="text-xl ">{item.icon}</span>
                    {isOpen && <span className="font-medium">{item.label} </span>}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-2 space-y-1 flex flex-col gap-4">
            {isOpen && <p className='text-gray-400 px-3 font-semibold '>Business </p>}
            {secondmenu.map(item => (
              <li className='hover:text-white' key={item.id}>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-3 py-2 rounded transition-all duration-300 hover:bg-gray-500 transition-hover hover:text-white text-left  text-cyan-600"
                >
                  <span className="text-xl ">{item.icon}</span>
                  {isOpen && <span className="font-medium">{item.label} </span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;