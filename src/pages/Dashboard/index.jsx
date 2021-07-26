import { useState } from "react";
import { Redirect } from "react-router-dom";

import Cards from "../../components/Cards";

import { Container, Input, Button } from "./styles";

function Dashboard({ authenticated }) {
  const [value, setValue] = useState("");
  const [cardPlace, setCardPlace] = useState([]);

  const addCards = (item) => {
    setCardPlace(...cardPlace, item);
  };

  const handleCardplace = (clickedItem) => {
    cardPlace.filter((elt) => elt !== clickedItem);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <h1>Dashboard!</h1>
      <section>
        <Input
          placeholder="Cadastre suas tecnologias"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => addCards(value)}>Adicionar</Button>
        <Cards cardPlace={cardPlace} handleCardplace={handleCardplace} />
      </section>
    </Container>
  );
}

export default Dashboard;
