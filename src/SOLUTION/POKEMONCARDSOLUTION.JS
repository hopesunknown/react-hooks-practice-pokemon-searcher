import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          
          <img src={ isClicked ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
