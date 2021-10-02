import React from 'react';
import { useGlobalContext } from '../context/Context';

const NavDropDown = () => {
  const { isDropdownOpen } = useGlobalContext();
  return (
    isDropdownOpen && (
      <ul className="z-20 beforeDropdown py-3 top-[55px] mt-1 pr-1 text-attachmentColor capitalize font-normal  bg-white border-0 cursor-pointer rounded-md shadow-md transform absolute transition duration-150 ease-in-out origin-top min-w-32">
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          features
        </li>
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          channels
        </li>
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          integrations
        </li>
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          security
        </li>
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          slack connect
        </li>
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          solutions
        </li>
        <li className="pl-5 py-1 mb-2 hover:bg-sidebarHighlightColor border-b border-transparent hover:text-white pr-[95px]">
          customers
        </li>
      </ul>
    )
  );
};

export default NavDropDown;
