import React from 'react';

const Footer = () => {
  return (
    <section className="h-auto clip-path-ellipse lg:clip-path-ellipse-2 pt-20 pb-24  bg-articleTheme-primary text-white md:py-20 min-h-[375px]">
      <div className="mx-auto w-11/12 max-w-[76.875rem]">
        <h3 className="text-center mb-8 text-3xl md:text-4xl lg:text-5xl font-bold">
          Welcome to the future of work
        </h3>
        <div className="lg:flex lg:justify-center lg:flex-auto lg: gap-5">
          <button className="btn big w-full lg:w-auto bg-white lg:mb-0 mb-5 text-articleTheme-primary">
            try for free
          </button>
          <button className="btn big w-full lg:w-auto bg-transparent border-white">
            talk to sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
