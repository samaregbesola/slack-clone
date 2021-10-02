import React, { useState } from 'react';
import { cta } from '../utils/cta';
import Card from './Card';

const GetStarted = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const setIndex = index => {
    setCardIndex(index);
  };

  return (
    <section className="bg-peachBg w-full py-5">
      <div className="w-11/12 mx-auto">
        <div className="flex relative h-[450px] sm:h-auto w-full overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
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
