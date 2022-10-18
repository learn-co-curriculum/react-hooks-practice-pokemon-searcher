import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {
  return (
    <Card.Group itemsPerRow={6}>
      
      {pokemonData.map(pokemon => {
        return <PokemonCard pokemon={pokemon} />
      })}
      
    </Card.Group>
  );
}

export default PokemonCollection;
