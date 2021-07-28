import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import api from "../../services/api";

import Cards from "../../components/Cards";

import { Main, Container, Input, Button, Section } from "./styles";

function Dashboard({ authenticated }) {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );
  const [id] = useState(localStorage.getItem("@Kenziehub:id") || "");

  const { register, handleSubmit } = useForm();

  const loadTasks = () => {
    //função que mostrará os cards
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTasks(response.data.techs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => loadTasks(), []);

  const deleteTask = (id) => {
    tasks.filter((elt) => elt.id !== id);
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(loadTasks());
  };

  const onSubmitFunction = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(loadTasks())
      .catch((err) => console.log(err));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Main>
      <h1>Dashboard!</h1>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          placeholder="Cadastre suas tecnologias..."
          {...register("title")}
        />
        <Input placeholder="...junto com seu status." {...register("status")} />
        <Button type="submit">Adicionar</Button>
      </Container>
      <Section>
        {tasks &&
          tasks.map((task) => <Cards task={task} deleteTask={deleteTask} />)}
      </Section>
    </Main>
  );
}

export default Dashboard;
