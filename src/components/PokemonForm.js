import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAdd}) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [frontSprite, setFrontSprite] = useState("");
  const [backSprite, setBackSprite] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const newPokemon = {
      id: 1,
      name: name,
      hp: hp,
      sprites: {
        front: frontSprite,
        back: backSprite
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
    setFrontSprite("");
    setBackSprite("");
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e) => setHp(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontSprite(e.target.value)} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackSprite(e.target.value)} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;