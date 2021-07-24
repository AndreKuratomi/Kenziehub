export const Cards = ({ cardPlace, handleCardplace }) => {
  return (
    <ul>
      {cardPlace &&
        cardPlace.map((elt, index) => (
          <li key={index}>
            <h3>Tecnologia</h3>
            <p>{elt}</p>
            <button onClick={handleCardplace(elt)}>Deletar</button>
          </li>
        ))}
    </ul>
  );
};
