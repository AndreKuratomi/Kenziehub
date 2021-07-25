import { useState } from "react";
import { Redirect } from "react-router-dom";

import Cards from "../../components/Cards";

function Dashboard({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  // const [value, setValue] = useState("");
  // const [cardPlace, setCardPlace] = useState([]);

  // const addCards = (item) => {
  //   setCardPlace(...cardPlace, item);
  // };

  // const handleCardplace = (clickedItem) => {
  //   cardPlace.filter((elt) => elt !== clickedItem);
  // };

  return (
    <>
      <h1>Dashboard!</h1>
      {/* <section>
        <input
          placeholder="Cadastre suas tecnologias"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => addCards(value)}>Adicionar</button>
        <Cards cardPlace={cardPlace} handleCardplace={handleCardplace} />
      </section> */}
    </>
  );
}

export default Dashboard;
