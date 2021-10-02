import React from 'react';
import arrowRight from '../assets/images/rightArrow.svg';
import play from '../assets/images/play.svg';
import { channelItems } from '../utils/channelItems';

const SectionChannels = () => {
  return (
    <section className="bg-white w-full mt-[6rem]">
      {channelItems.map(items => {
        const { id, heading, link, text, images, order, video } = items;
        return (
          <div
            key={id}
            className="w-11/12 mx-auto grid items-center miniDesktop:grid-cols-section2 miniDesktop:justify-between mb-12 md:mb-[6rem]"
          >
            <div className="max-w-[500px]">
              <h2 className="mb-5 font-bold text-2xl md:text-[2rem]">
                {heading}
              </h2>
              <p className="mb-5 font-semibold">{text}</p>
              <a
                href="/"
                className="mb-10 linkHover text-sidebarHighlightColor font-semibold"
              >
                {link}
                <span className="inline-block ml-2 font-normal">
                  <img
                    src={arrowRight}
                    height="13px"
                    width="19px"
                    alt="right"
                  />
                </span>
              </a>
              <div className="sm:grid sm:grid-cols-videoSnippet mt-10">
                {images.map((img, index) => {
                  const { image, caption } = img;
                  return (
                    <div
                      key={index}
                      className="max-w-[225px] mb-10 flex flex-col"
                    >
                      <div>
                        <a
                          href="/"
                          className="relative grid place-content-center"
                        >
                          <img
                            src={image}
                            className="rounded-md"
                            alt="what are channels?"
                          />
                          <img
                            src={play}
                            alt="play"
                            className="absolute w-[60px] h-auto right-[5px] bottom-[5px]"
                          />
                        </a>
                      </div>
                      <div className="flex justify-between gap-2 mt-2 text-xs">
                        <span className="font-bold block">{caption}</span>

                        <span className="block">0:15</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <video
              className={`hidden xlDesktop:block xlDesktop:max-h-[450px] ${
                order > 0 ? 'ml-auto' : 'ml-0'
              }`}
              style={{ order: `${order}` }}
              loop
              autoPlay
              muted
            >
              <source src={video} />
            </video>
          </div>
        );
      })}
    </section>
  );
};

export default SectionChannels;
