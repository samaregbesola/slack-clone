import React from 'react';

import heroImage from '../assets/images/slack-campaign-hero.jpg';
import googleSVG from '../assets/images/google.svg';
import { logos } from '../utils/logos';

const Hero = () => {
  return (
    <section className="bg-peachBg min-h-screen">
      <div className="mx-auto pt-28 pb-20 w-11/12 md:grid md:grid-cols-2 xlDesktop:grid-cols-xlDesktop flex flex-col items-start gap-[4%]">
        <header className="lg:flex-grow w-full flex flex-col md:items-start text-left mb-20 md:mb-0 items-center">
          <h1 className="font-bold mb-4 lg:text-6xl sm:text-5xl text-4xl  text-gray-900 tracking-[-1.5px]">
            Slack is where the future works
          </h1>
          <p className="mb-8 mx-auto leading-relaxed font-semibold text-xl max-w-[40rem]">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="flex flex-1 xlDesktop:gap-2 flex-col w-full xlDesktop:flex-row xlDesktop:items-center xlDesktop:w-3/5">
            <button className="btn big bg-buttonColor w-full text-white xlDesktop:mb-0 mb-4 whitespace-nowrap">
              try for free
            </button>
            <button className="btn relative big bg-darkBlue text-white w-full flex justify-start whitespace-nowrap">
              <span className="absolute top-1 left-1 bottom-1 bg-white grid place-content-center w-[56px]">
                <img src={googleSVG} alt="google" />
              </span>
              <span className="pl-8">sign up with google</span>
            </button>
          </div>
        </header>
        <div className="lg:max-w-full w-full">
          <img className="object-cover" alt="hero" src={heroImage} />
        </div>
      </div>

      <section className="w-11/12 mx-auto">
        <div className=" pb-20 flex flex-1 items-center gap-5 md:gap-10  justify-around md:justify-between flex-wrap md:flex-nowrap">
          {logos.map(logo => {
            return (
              <div key={logo.id}>
                <img src={logo.img} alt={logo.name} className="" />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Hero;
