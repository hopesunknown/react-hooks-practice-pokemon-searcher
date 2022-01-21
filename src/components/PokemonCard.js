import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeData}) {
 const [isClicked, setIsClicked] = useState(true)

 function handleClick() {
   setIsClicked(!isClicked)
 }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick} >
          <img src={ isClicked ? pokeData.sprites.front : pokeData.sprites.back } alt={pokeData.name}/>
        </div>
        <div className="content">
          <div className="header">{pokeData.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeData.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;