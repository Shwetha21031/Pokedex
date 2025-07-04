import { POKEMON_BY_ID } from "../types/urls";

export const getRandomPokemonUrls = (count: number): string[] => {
  const set = new Set<number>();
  while (set.size < count) {
    set.add(Math.floor(Math.random() * 1000) + 1);
  }
  return Array.from(set).map((id) => `${POKEMON_BY_ID}/${id}`);
};
