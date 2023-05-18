import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
const [truthy, setTruthy] = useState(true)

function handleClick() {
  // console.log(truthy)
  setTruthy(!truthy)
}

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick} src={ truthy ? poke.sprites.front : poke.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
