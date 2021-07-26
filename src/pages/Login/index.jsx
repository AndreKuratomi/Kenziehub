import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useHistory, Redirect } from "react-router-dom";

import api from "../../services/api";

import { Container, Form, Input, Select, Div } from "./styles";

function Login({ authenticated, setAuthenticated }) {
  const formSchema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 caracteres!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>?]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha deve ter ao menos 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history2 = useHistory();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));

        setAuthenticated(true);

        return history2.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>Faça o login a seguir:</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Email" {...register("email")} />
        {errors.email && <Div>{errors.email.message}</Div>}
        <Input type="password" placeholder="Senha" {...register("password")} />
        {errors.password && <Div>{errors.password.message}</Div>}
        <button type="submit">Logar</button>
      </Form>
      <p>
        Ainda não tem cadastro? Então vamos ao
        <Link to="/signup"> Cadastro</Link>.
      </p>
    </Container>
  );
}

export default Login;
