import React from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Steps from '../components/Steps';
import Pros from '../components/Pros';
import Reviews from '../components/Reviews';
import OpenPositions from '../components/OpenPositions';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <Steps />
      <Pros />
      <Reviews />
      <OpenPositions />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
