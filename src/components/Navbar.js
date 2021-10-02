import React from 'react';
import logo from '../assets/images/Slack_Technologies_Logo.svg';
import ArrowDown from '../assets/images/down.svg';
import SearchBtn from '../assets/images/search.svg';
import IconBars from '../assets/images/iconbars.svg';
import NavDropDown from './NavDropDown';
import MobileNav from './MobileNav';
import { useGlobalContext } from '../context/Context';

const Navbar = () => {
  const { openDropdown, openMobileNavMenu } = useGlobalContext();
  return (
    <>
      <nav className="w-full bg-transparent h-20 text-attachmentColor p-0 z-10 absolute top-0">
        <div className="h-full w-11/12 flex justify-center items-center mx-auto max-w-[76.875rem]">
          <img
            src={logo}
            alt="Slack"
            className="block object-cover w-36 pr-10"
          />
          <div className="hidden desktop:flex justify-between items-center flex-1">
            <ul className="flex font-bold text-sm capitalize cursor-pointer">
              <li
                className="mr-8 capitalize flex items-center relative"
                onMouseOver={openDropdown}
              >
                product
                <span className="inline-block ml-2">
                  <img src={ArrowDown} alt="arrow down" />
                </span>
              </li>
              <NavDropDown />
              <li className="mr-8">enterprise</li>
              <li className="mr-8">resources</li>
              <li className="">pricing</li>
            </ul>

            <div className="flex p-4 items-center pr-0">
              <button className="mr-10 mt-1">
                <img src={SearchBtn} alt="" />
              </button>
              <a
                href="/"
                className="font-bold inline-block text-attachmentColor border-transparent text-sm"
              >
                Sign in
              </a>
              <button className="btn small text-buttonColor bg-transparent border-buttonColor ml-10">
                talk to sales
              </button>
              <button className="btn small text-white bg-buttonColor border-buttonColor ml-5">
                try for free
              </button>
            </div>
          </div>

          <div className="flex justify-end items-center w-full desktop:hidden">
            <button className="inline-block mr-8 mt-1">
              <img src={SearchBtn} alt="" />
            </button>
            <button className="inline-block" onClick={openMobileNavMenu}>
              <img src={IconBars} alt="menu" />
            </button>
          </div>
        </div>
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
