import React from 'react';
import YTThumbnail from '../assets/images/YTThumbnail.jpg';
import play from '../assets/images/play.svg';

const SectionMoment = () => {
  return (
    <section className="p-0 w-full relative">
      <div className="bg-peachBg absolute top-0 left-0 w-full h-[30%] md:h-full miniDesktop:h-[85%] z-[-1]"></div>
      <div className="w-11/12 mx-auto grid md:grid-cols-moment xxlDesktop:grid-cols-section md:gap-[30px] xxl:gap-[1.2rem] pb-10">
        <div className="m-0 grid justify-start items-start">
          <a href="/" className="grid place-items-center relative m-auto">
            <img
              src={YTThumbnail}
              alt="video thumbnail"
              className="max-w-full min-w-full block px-[1.21%] z-[-1]"
            />
            <img src={play} alt="play" className="absolute" />
          </a>
        </div>
        <div>
          <h2 className="text-2xl md:text-[2rem] font-bold mb-4 mt-2">
            Now is your moment to build a better tomorrow
          </h2>
          <p className="leading-5 tracking-wide md:text-[1.125rem] mb-4">
            We’ve seen what the future can be. Now it’s time to decide what it
            will be.
          </p>
          <button className="btn big w-full md:w-auto border-articleTheme-primary text-articleTheme-primary bg-transparent">
            watch video
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionMoment;
