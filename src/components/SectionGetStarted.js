import React, { useState } from 'react';
import { cta } from '../utils/cta';
import Card from './Card';

const GetStarted = () => {
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <section className="bg-peachBg w-full py-5">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-start ml-auto w-full overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {cta.map((cta, index) => {
            return <Card key={index} {...cta} />;
          })}
        </div>
        <div className="mt-2 flex justify-center items-center sm:hidden">
          {cta.map((_, index) => {
            return (
              <span
                onClick={() => setCardIndex(index)}
                key={index}
                className={`mx-2 cursor-pointer rounded-full ${
                  index ? 'bg-articleTheme-primary' : 'bg-black opacity-20'
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
