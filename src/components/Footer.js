import React from 'react';
import {
  arrowDown,
  download,
  facebook,
  globe,
  linkedIN,
  slackIcon,
  twitter,
  youtube,
} from '../assets/images';

import FooterList from './FooterList';

const Footer = () => {
  return (
    <footer className="w-full p-0">
      <div className="pt-14 w-11/12 mx-auto max-w-[76.875rem]">
        <div className="w-full lg:flex lg:justify-between lg:items-start">
          <img
            src={slackIcon}
            className="block object-cover w-14 lg:mb-0 mb-5 h-auto cursor-pointer lg:mr-40"
            alt="slack"
          />
          <FooterList />
        </div>
        <div className="mt-10 py-5 border-t-2 border-borderColor">
          <div className="md:flex md:items-center md:justify-center md:flex-wrap lg:flex-nowrap font-bold text-sm mb-10">
            <ul className="w-auto sm:flex">
              <li
                className="mr-4 capitalize mb-5 sm:mb-0"
                style={{ padding: '2px 0' }}
              >
                status
              </li>
              <li className="mr-4 capitalize mb-5 sm:mb-0 py-[2px]">privacy</li>
              <li className="mr-4 capitalize mb-5 sm:mb-0 py-[2px]">terms</li>
              <li className="mr-4 capitalize mb-5 sm:mb-0 py-[2px]">
                cookie preferences
              </li>
              <li className="mr-4 capitalize mb-5 sm:mb-0 py-[2px]">
                contact us
              </li>
              <li className="mr-4 capitalize mb-5 sm:mb-0 flex items-center py-[2px]">
                <span className="block mr-2">
                  <img src={globe} alt="globe" />
                </span>
                <span className="block mr-2">change region</span>
                <span className="block">
                  <img src={arrowDown} alt="" className="" />
                </span>
              </li>
            </ul>
            <button className="flex items-center font-bold pb-10 sm:pb-0 sm:ml-auto text-sidebarHighlightColor">
              <span className="block mr-2">
                <img src={download} alt="download" />
              </span>
              Download Slack
            </button>
            <ul className="flex items-center mb-10 sm:mb-0 justify-between w-full sm:w-auto ml-0 sm:ml-5">
              <li className="mr-4">
                <img src={twitter} className="w-5 h-5 md:w-4 md:h-4" alt="tw" />
              </li>
              <li className="mr-4">
                <img
                  src={facebook}
                  className="w-5 h-5 md:w-4 md:h-4"
                  alt="fb"
                />
              </li>
              <li className="mr-4">
                <img src={youtube} className="w-5 h-5 md:w-4 md:h-4" alt="yt" />
              </li>
              <li className="mr-4">
                <img
                  src={linkedIN}
                  className="w-5 h-5 md:w-4 md:h-4"
                  alt="in"
                />
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex justify-start">
              <span className="text-xs text-gray-400">
                &copy;2021 Slack Technologies, LLC, a Salesforce company. All
                rights reserved. Various trademarks held by their respective
                owners.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
