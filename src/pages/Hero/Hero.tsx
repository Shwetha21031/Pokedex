import React from 'react';
import Header from '../../components/Header/Header';
import './hero.scss';
import PokemonHeroSection from '../../components/PokemonHeroSection/PokemonHeroSection';

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay-content">
        <Header />
        <PokemonHeroSection />
      </div>
    </div>
  );
};

export default Hero;
