import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAdd}) {

  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [frontSprites, setFrontSprites] = useState("");
  const [backSprites, setBackSprites] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const newPokemon = {
      id: 1,
      name: name,
      hp: hp,
      sprites: {
        front: frontSprites,
        back: backSprites
      },
    };

    fetch("http://localhost:3001/pokemon", { 
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPokemon)
    })

    handleAdd(newPokemon);
    setName("");
    setHp(0);
    setFrontSprites("");
    setBackSprites("");
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontSprites(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackSprites(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
