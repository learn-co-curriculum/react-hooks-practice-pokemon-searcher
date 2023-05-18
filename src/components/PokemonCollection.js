import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokes }) {

  const displayPoke = pokes.map((poke) => {
    return <PokemonCard key={poke.id} poke={poke}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {displayPoke}
    </Card.Group>
  );
}

export default PokemonCollection;
