function Cards({ cardPlace, handleCardplace }) {
  return (
    <ul>
      {cardPlace &&
        cardPlace.map((elt, index) => (
          <li key={index}>
            {/* <h3>{title}</h3>
            <p>{status}</p> */}
            <button onClick={handleCardplace(elt)}>Deletar</button>
          </li>
        ))}
    </ul>
  );
}

export default Cards;
