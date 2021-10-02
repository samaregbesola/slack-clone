import React from 'react';
import rightArrow from '../assets/images/rightArrow.svg';

const Card = ({ img, subHeading, heading, cta, position }) => {
  return (
    <article
      className={`shadow-sm ${position} mb-2  opacity-0 sm:opacity-100 p-4 z-1 min-w-[285px] sm:w-auto min-h-[420px] absolute top-0 left-[50%] sm:left-0 sm:translate-x-0 sm:relative cursor-pointer sm:max-w-screen-cta bg-white lg:max-w-screen-cta transition-all scale-100 duration-300 transform sm:hover:scale-[1.02] hover:shadow-md ease-in-out`}
    >
      <figure className="overflow-hidden w-full relative h-[13rem]">
        <img
          src={img}
          alt="Slack app used on a phone"
          className="w-auto object-cover"
          loading="lazy"
        />
      </figure>

      <header>
        <span className="block capitalize text-sm mt-[-10px]">
          {subHeading}
        </span>
        <h3 className="font-bold mt-2 mb-4 mx-0 text-[1.4rem]">{heading}</h3>
      </header>

      <div className="absolute w-full p-4 bottom-0 left-0 flex justify-between items-center">
        <span className="block  text-sidebarHighlightColor font-bold uppercase">
          {cta}
        </span>
        <span className="">
          <img src={rightArrow} className="h-3" alt="right-chevron" />
        </span>
      </div>
    </article>
  );
};

export default Card;
