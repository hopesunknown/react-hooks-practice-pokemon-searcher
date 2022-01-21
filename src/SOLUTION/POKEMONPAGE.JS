import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((resp) => resp.json())
    .then((pokeData) => setPokeData(pokeData))
  }, [])

const filteredArray = pokeData.filter((pokemon) => {
  return pokemon.name.toLowerCase().includes(search.toLowerCase())
})

function handleAdd(newPokemon) {
  const addPokemonArray = [...pokeData, newPokemon]
  setPokeData(addPokemonArray)
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAdd={handleAdd} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokeData={filteredArray} />
    </Container>
  );
}

export default PokemonPage;
