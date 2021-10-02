import React from 'react';

import {
  company,
  pricing,
  product,
  resources,
  whySlack,
} from '../utils/footerItems';

const FooterList = () => {
  return (
    <nav className="flex justify-between items-start flex-1 w-full text-attachmentColor">
      <ul className="sm:grid sm:grid-cols-5 w-full">
        <li className="text-sm">
          <span className="block font-bold uppercase relative mb-3">
            why slack?
          </span>
          <ul className=" m-0 p-0 flex flex-col">
            {whySlack.map(list => {
              return (
                <li key={list.id} className="flex-1 mb-3">
                  {list.text}
                </li>
              );
            })}
          </ul>
        </li>
        <li className="text-sm">
          <span className="block font-bold uppercase relative mb-3">
            product
          </span>
          <ul className=" m-0 p-0 flex flex-col">
            {product.map(list => {
              return (
                <li key={list.id} className="flex-1 mb-3">
                  {list.text}
                </li>
              );
            })}
          </ul>
        </li>
        <li className="text-sm">
          <span className="block font-bold uppercase relative mb-3">
            pricing
          </span>
          <ul className=" m-0 p-0 flex flex-col">
            {pricing.map(list => {
              return (
                <li key={list.id} className="flex-1 mb-3">
                  {list.text}
                </li>
              );
            })}
          </ul>
        </li>
        <li className="text-sm">
          <span className="block font-bold uppercase relative mb-3">
            resources
          </span>
          <ul className=" m-0 p-0 flex flex-col">
            {resources.map(list => {
              return (
                <li key={list.id} className="flex-1 mb-3">
                  {list.text}
                </li>
              );
            })}
          </ul>
        </li>
        <li className="text-sm">
          <span className="block font-bold uppercase relative mb-3">
            company
          </span>
          <ul className=" m-0 p-0 flex flex-col">
            {company.map(list => {
              return (
                <li key={list.id} className="flex-1 mb-3">
                  {list.text}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default FooterList;
