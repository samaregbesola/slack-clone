import React from 'react';
import {
  Hero,
  Navbar,
  SectionChannels,
  SectionMoment,
  SectionWelcome,
  Footer,
  GetStarted,
} from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionMoment />
      <SectionChannels />
      <GetStarted />
      <SectionWelcome />
      <Footer />
    </>
  );
};

export default Home;
