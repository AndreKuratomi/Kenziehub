import { Link, Redirect } from "react-router-dom";

import { Container, Button1 } from "./styles";

function Home({ authenticated }) {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>KenzieHub!</h1>
      <p>
        Organize suas tecnologias aprendidas conforme o módulo em que estiver.
      </p>
      <section>
        <Button1>
          <Link to="/signup">Cadastre-se</Link>
        </Button1>
        <Button1>
          <Link to="/signup">Login</Link>
        </Button1>
      </section>
    </Container>
  );
}

export default Home;
