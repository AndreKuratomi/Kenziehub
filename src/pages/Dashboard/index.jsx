import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import api from "../../services/api";

import Cards from "../../components/Cards";

import { Container, Input, Button } from "./styles";

function Dashboard({ authenticated }) {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const loadTasks = () => {
    api
      .get("/user/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const onSubmitFunction = () => {};

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Dashboard!</h1>
      <section>
        <Input placeholder="Cadastre suas tecnologias" />
        <Button type="submit" onClick={() => {}}>
          Adicionar
        </Button>
        <section>
          {tasks.map((task) => (
            <Cards
              key={task.id}
              title={tasks.title}
              status={tasks.status}
              onClick={() => {}}
            />
          ))}
        </section>
      </section>
    </Container>
  );
}

export default Dashboard;
