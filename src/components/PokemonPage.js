import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const url = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [ pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;