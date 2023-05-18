import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState, useEffect} from "react";

function PokemonPage() {
const [pokepoke, setPokepoke] = useState([])
const [search, setSearch ] = useState('')

function handleSearch(newSearch) {
  setSearch(newSearch)
}

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then((resp) => resp.json())
  .then((data) => { setPokepoke(data)}) 
},[])

  let filteredPoke = pokepoke.filter((poke) => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })

  function handlePost(newpoke) {
    setPokepoke([...pokepoke, newpoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPost={handlePost}/>
      <br />
      <Search search={search} onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokes={filteredPoke}/>
    </Container>
  );
}

export default PokemonPage;

/////////////// Project Goals /////////////////
// Create an index displaying Pokemon 'cards' 
// Render each Pokemon name, sprite, and hp in a card
// When clicked, the card should toggle between displaying the front and back sprites 
// Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page 
//needed to move filtered array aso filtered arra would show when searching
// Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.
////////// Project Requirements //////////////////
// components using state and props
// re-renders based on client-side events
// can both get data from, and post data to the json server/database