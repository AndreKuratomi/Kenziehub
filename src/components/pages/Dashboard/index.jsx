import { useState } from "react";

import Cards from "../../Cards";

export const Dashboard = () => {
  const [value, setValue] = useState("");
  const [cardPlace, setCardPlace] = useState([]);

  const addCards = (item) => {
    setCardPlace(...cardPlace, item);
  };

  const handleCardplace = (clickedItem) => {
    cardPlace.filter((elt) => elt !== clickedItem);
  };

  return (
    <>
      <section>
        <input
          placeholder="Cadastre suas tecnologias"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => addCards(value)}>Adicionar</button>
        <Cards cardPlace={cardPlace} handleCardplace={handleCardplace} />
      </section>
    </>
  );
};
