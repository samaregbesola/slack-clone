import React, { useState } from 'react';
import { cta, getStarted } from '../utils/cta';
import Card from './Card';

const GetStarted = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const setIndex = index => {
    setCardIndex(index);
  };

  return (
    <section className="bg-peachBg w-full py-20">
      <div className="w-11/12 mx-auto">
        <h2 className="capitalize text-3xl text-left sm:text-center font-bold mb-12 md:mb-14">
          Get started with slack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-auto mb-10 md:gap-12 lg:gap-16  lg:grid-cols-3">
          {getStarted.map(items => {
            const { id, heading, text } = items;
            return (
              <article key={id} className="mb-10 sm:mb-0">
                <span className="w-[40px] h-[40px] rounded-md font-bold text-xl bg-articleTheme-primary text-white p-2 grid place-content-center mb-5">
                  {id}
                </span>
                <h3 className="text-xl font-bold mb-5"> {heading}</h3>
                <p className="mb-5 max-w-[350px]">{text}</p>
              </article>
            );
          })}
        </div>
        <div className="flex justify-center relative h-[450px] sm:h-auto w-full overflow-hidden sm:overflow-auto flex-wrap sm:grid-container--fit sm:gap-10 lg:gap-5">
          {cta.map((items, index) => {
            let position = 'nextSlide';
            if (cardIndex === index) {
              position = 'activeSlide';
            }
            if (
              cardIndex === index - 1 ||
              (index === 0 && cardIndex === cta.length - 1)
            ) {
              position = 'lastSlide';
            }
            return <Card key={index} {...items} position={position} />;
          })}
        </div>
        <div className="mt-2 flex justify-center items-center sm:hidden">
          {cta.map((_, index) => {
            return (
              <span
                onClick={() => setIndex(index)}
                key={index}
                className={`mx-2 cursor-pointer rounded-full ${
                  index === cardIndex
                    ? 'bg-articleTheme-primary'
                    : 'bg-black opacity-20'
                }`}
                style={{ height: '13px', width: '13px' }}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
