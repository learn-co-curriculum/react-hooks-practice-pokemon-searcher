import React,{useState, useEffect}  from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then((resp) => resp.json())
  .then((data) => {setPokemons(data)}) 
},[])

 const filteredPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  //needed for post 
  function handleNewPoke(newPokemon) {
    setPokemons({...pokemons, newPokemon})
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm  onNewPoke={handleNewPoke}/>
      <br />
      <Search search={search} onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon}/>
    </Container>
  );
}
export default PokemonPage;

/////////////// Project Goals /////////////////
// Create an index displaying Pokemon 'cards' DONE
// Render each Pokemon name, sprite, and hp in a cardDONE
// When clicked, the card should toggle between displaying the front and back sprites DONE
// Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page DONE
//needed to move filtered array aso filtered arra would show when searching
// Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.
////////// Project Requirements //////////////////
// components using state and props
// re-renders based on client-side events
// can both get data from, and post data to the json server/database