import { Link, Redirect } from "react-router-dom";
// import { Container } from "./styles";

function Home({ authenticated }) {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1>KenzieHub!</h1>
      <p>
        Organize suas tecnologias aprendidas conforme o módulo em que estiver.
      </p>
      <section>
        <button>
          <Link to="/signup">Cadastre-se</Link>
        </button>
        <button>
          <Link to="/signup">Login</Link>
        </button>
      </section>
    </>
  );
}

export default Home;
