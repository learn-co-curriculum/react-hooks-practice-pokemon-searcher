
//Best Code finished but Breaks on Post, state isn't being updated somewhere

// //App
// import React from "react";
// import PokemonPage from "./PokemonPage";

// function App() {
//   return (
//     <div className="App">
//       <PokemonPage />
//     </div>
//   );
// }

// export default App;

// //PokemonCard 
// import React,{useState} from "react";
// import { Card } from "semantic-ui-react";

// function PokemonCard({ pokemon }) {
// const [truthy, setTruthy] = useState(true)

//   function handleTheTruth() {
//     setTruthy(intialTruth => !intialTruth)
//   }
//   //button needs to toggle between true adn false states, this function gets the job done  

//   return (
//     <Card onClick={handleTheTruth} >
//       <div>
//         <div className="image">
//           <img 
//           // best for setting the data with state 
//           src={truthy ? pokemon.sprites.front : pokemon.sprites.back}
//           alt={pokemon.name} />
//         </div>
//         <div className="content">
//           <div className="header">{pokemon.name}</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             {pokemon.hp}
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default PokemonCard;

// //PokemonCollection
// import React from "react";
// import PokemonCard from "./PokemonCard";
// import { Card } from "semantic-ui-react";

// function PokemonCollection({pokemons}) {

//   const displayCards = pokemons.map((pokemon) => {
//     return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
//   }) 
//   return (
//     <Card.Group itemsPerRow={6}>
//       <h1>Hello From Pokemon Collection</h1>
//       {displayCards}
//     </Card.Group>
    
//   );
// }

// export default PokemonCollection;


// //PokemonForm 
// import React,{useState} from "react";
// import { Form } from "semantic-ui-react";

// function PokemonForm({ onNewPoke }) {
//   const intialForm = {
//     "name" : "",
//     "hp" : 0,
//     "frontUrl" : "",
//     "backUrl" : ""
//     //use names they provide next time 
//     //resets forms
//   }
//   const [form , setForm] = useState(intialForm)

  
//   function handlePOST(e){
//     e.preventDefault()
//     fetch('http://localhost:3001/pokemon', {
//       method: 'POST',
//       headers: { 'Content-Type' : 'application/json' },
//       body: JSON.stringify({
//         'name' : form.name,
//         'hp': form.hp,
//         'sprites': {'front': form.frontUrl, 'back': form.backUrl}
// })
//     })
//     .then(response => response.json())
//     .then(newPoke => {
//       onNewPoke(newPoke)
//     })
//   }
//   console.log(form)
  
    
//   function handleChange(e) {
//     setForm({...form, [e.target.name] : e.target.value })
//   }


//   return (
//     <div>
//       <h3>Add a Pokemon!</h3>
//       <Form
//         onSubmit={handlePOST}
//       >
//         <Form.Group widths="equal">
//           <Form.Input fluid label="Name" placeholder="Name" name="name" value={form.name} onChange={handleChange}/>
//           <Form.Input fluid label="hp" placeholder="hp" name="hp" value={form.hp} onChange={handleChange}/>
//           <Form.Input
//             fluid
//             label="Front Image URL"
//             placeholder="url"
//             name="frontUrl"
//             value={form.frontUrl}
//             onChange={handleChange}
//           />
//           <Form.Input
//             fluid
//             label="Back Image URL"
//             placeholder="url"
//             name="backUrl"
//             value={form.backUrl}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     </div>
//   );
// }

// export default PokemonForm;
// //site keeps breaking on POST


// //PokemonPage
// import React,{useState, useEffect}  from "react";
// import PokemonCollection from "./PokemonCollection";
// import PokemonForm from "./PokemonForm";
// import Search from "./Search";
// import { Container } from "semantic-ui-react";

// function PokemonPage() {
//   const [pokemons, setPokemons] = useState([])
//   const [search, setSearch] = useState('')

//   useEffect(() => {
//   fetch('http://localhost:3001/pokemon')
//   .then((resp) => resp.json())
//   .then((data) => {setPokemons(data)}) 
// },[])

//  const filteredPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

//   function handleSearch(e) {
//     setSearch(e.target.value)
//   }

//   //needed for post 
//   function handleNewPoke(newPokemon) {
//     setPokemons({...pokemons, newPokemon})
//   }

//   return (
//     <Container>
//       <h1>Pokemon Searcher</h1>
//       <br />
//       <PokemonForm  onNewPoke={handleNewPoke}/>
//       <br />
//       <Search search={search} onSearch={handleSearch}/>
//       <br />
//       <PokemonCollection pokemons={filteredPokemon}/>
//     </Container>
//   );
// }
// export default PokemonPage;

// /////////////// Project Goals /////////////////
// // Create an index displaying Pokemon 'cards' DONE
// // Render each Pokemon name, sprite, and hp in a cardDONE
// // When clicked, the card should toggle between displaying the front and back sprites DONE
// // Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page DONE
// //needed to move filtered array aso filtered arra would show when searching
// // Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.
// ////////// Project Requirements //////////////////
// // components using state and props
// // re-renders based on client-side events
// // can both get data from, and post data to the json server/database


//search 
// import React from "react";

// function Search({ pokemon, search, onSearch}) {

//   //what are you doing with this data?
//   //start from the bottom 

//   return (
//     <div className="ui search">
//       <div className="ui icon input">
//         <input className="prompt" value={search} onChange={onSearch}/>
//         <i className="search icon" />
//       </div>
//     </div>
//   );
// }

// export default Search;
