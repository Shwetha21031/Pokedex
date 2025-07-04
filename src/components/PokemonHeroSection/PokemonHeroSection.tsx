import React from "react";
import { getRandomPokemonUrls } from "../../utils/randomPokemonData";
import { useMultipleFetch } from "../../hooks/useMultipleFetch";
import centerBg from "../../assets/hero/pokemon_list_bg.png";
import "./pokemonherosection.scss";

const PokemonHeroSection = () => {
  const urls = React.useMemo(() => getRandomPokemonUrls(13), []);
  const { data, err, isLoading } = useMultipleFetch(urls);

  if (isLoading) return <div>Loading...</div>;
  if (err) return <div>Error: {err.message}</div>;

  return (
    <div className="pokemons-hero-container">
      <div className="hero-center-wheel-bg">
        <img src={centerBg} alt="center-bg" />
      </div>
      <div className="pokemon-row row-1">
        {data.slice(0, 4).map((pokemon, index) => (
          <div key={index} className={`pokemon-hero-bg card-${index}`}>
            {/* <h2>{pokemon.name}</h2> */}
            <img
              src={
                pokemon.sprites.other?.dream_world?.front_default ||
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>

      <div className="pokemon-row row-2">
        {data.slice(4, 9).map((pokemon, index) => {
          const realIndex = index + 4;
          const isCenter = realIndex === 6;
          return (
            <div
              key={realIndex}
              className={`pokemon-hero-bg card-${realIndex} ${
                isCenter ? "center-card" : ""
              }`}
            >
              {/* <h2>{pokemon.name}</h2> */}
              <img
                src={
                  pokemon.sprites.other?.dream_world?.front_default ||
                  pokemon.sprites.other?.["official-artwork"]?.front_default ||
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
              />
            </div>
          );
        })}
      </div>

      <div className="pokemon-row row-3">
        {data.slice(9, 13).map((pokemon, index) => {
          const realIndex = index + 9;
          return (
            <div
              key={realIndex}
              className={`pokemon-hero-bg card-${realIndex}`}
            >
              {/* <h2>{pokemon.name}</h2> */}
              <img
                src={
                  pokemon.sprites.other?.dream_world?.front_default ||
                  pokemon.sprites.other?.["official-artwork"]?.front_default ||
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonHeroSection;
