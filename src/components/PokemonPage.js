import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const pokemonDataUrl = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    fetch(pokemonDataUrl)
    .then(r => r.json())
    .then(data => setPokemonData(data))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonData={pokemonData}/>
    </Container>
  );
}

export default PokemonPage;
