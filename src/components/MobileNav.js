import React, { useState } from 'react';
import logo from '../assets/images/Slack_Technologies_Logo.svg';
import cancelBtn from '../assets/images/cancel.svg';
import { links } from '../utils/constants';
import { useGlobalContext } from '../context/Context';

const MobileNav = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const { isMobileNavOpen, closeMobileNavMenu } = useGlobalContext();
  return (
    <>
      <nav
        className={`z-30 w-full desktop:hidden  mx-auto bg-white fixed overflow-hidden top-0 left-0 bottom-0 right-0 flex flex-col transition-all duration-500 ease-out ${
          isMobileNavOpen
            ? 'transform translate-x-0 opacity-100'
            : 'transform translate-x-full opacity-0'
        }`}
      >
        <div className="mx-auto w-11/12 flex items-center h-20 justify-between m-[0,-2rem,1rem]">
          <img src={logo} className="block object-contain w-32" alt="Slack" />
          <button className="inline-block" onClick={closeMobileNavMenu}>
            <img src={cancelBtn} alt="menu" />
          </button>
        </div>
        <div className="mx-auto mt-10 overflow-y-scroll w-11/12 pr-2 pb-[40vh]">
          <nav className="outline-0 flex flex-col">
            <ul
              className="mx-auto w-full font-semibold p-0"
              style={{ fontSize: '1.1rem' }}
            >
              <li className="w-full mb-7 ">
                <span
                  className={`flex relative justify-start items-start ${
                    isProductOpen && 'bg-gray-100 py-2 px-1 rounded-[4px]'
                  }`}
                >
                  Product
                  <span
                    className="block cursor-pointer ml-auto"
                    onClick={() => setIsProductOpen(!isProductOpen)}
                  >
                    {!isProductOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </span>
                {isProductOpen && (
                  <ul className="w-full ml-[3rem] mt-5 flex flex-col transition-all duration-500 ease-in-out p-[.25rem,0,.25rem,2rem]">
                    {links.map(link => {
                      return (
                        <li className="mb-5 font-normal" key={link.id}>
                          {link.text}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
              <li className="mb-7">EnterPrise</li>
              <li className="mb-7">Resources</li>
              <li className="mb-7">Pricing</li>
              <li className="mb-7">Sign in</li>
            </ul>
          </nav>
        </div>
      </nav>
      {isMobileNavOpen && (
        <div
          className="fixed z-40 sm:flex gap-5 desktop:hidden w-full pt-10 px-6 pb-6 bottom-0 left-0 bg-white"
          style={{ boxShadow: '0 -10px 12px rgb(0 0 0 / 4%)' }}
        >
          <button className="btn big w-full border-articleTheme-primary text-articleTheme-primary mb-5">
            SIGN IN
          </button>
          <button className="btn big w-full border-articleTheme-primary bg-articleTheme-primary text-white mb-5">
            SIGN IN
          </button>
        </div>
      )}
    </>
  );
};

export default MobileNav;
