export const Cards = ({ cardPlace, handleCardplace }) => {
  return (
    <>
      {cardPlace &&
        cardPlace.map((elt, index) => (
          <article key={index}>
            <h3>Tecnologia</h3>
            <p>{elt}</p>
            <button onClick={handleCardplace(elt)}>Deletar</button>
          </article>
        ))}
    </>
  );
};
