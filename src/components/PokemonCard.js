import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
const [truthy, setTruthy] = useState(true)

  function handleTheTruth() {
    setTruthy(intialTruth => !intialTruth)
  }
  //button needs to toggle between true adn false states, this function gets the job done  

  return (
    <Card onClick={handleTheTruth} >
      <div>
        <div className="image">
          <img 
          // best for setting the data with state 
          src={truthy ? pokemon.sprites.front : pokemon.sprites.back}
          alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
