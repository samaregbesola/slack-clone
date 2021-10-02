import React from 'react';
import rightArrow from '../assets/images/rightArrow.svg';

const Card = ({ img, subHeading, heading, cta }) => {
  return (
    <article className="shadow-sm mb-2 mr-xxl p-4 z-1 min-w-[285px] min-h-[420px] relative cursor-pointer max-w-screen-cta bg-white lg:max-w-screen-cta transition-all scale-100 duration-300 transform hover:scale-[1.02] hover:shadow-md ease-in-out">
      <figure className="overflow-hidden w-full relative h-[13rem]">
        <img
          src={img}
          alt="Slack app used on a phone"
          className="w-full object-cover"
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
