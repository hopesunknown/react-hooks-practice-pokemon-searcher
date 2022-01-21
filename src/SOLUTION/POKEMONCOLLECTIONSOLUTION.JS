import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData }) {  

const cards = pokeData.map((poke) => (
  <PokemonCard key={poke.id} pokemon={poke} />
))

  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
