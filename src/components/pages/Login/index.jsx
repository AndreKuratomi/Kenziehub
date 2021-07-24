import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useHistory } from "react-router-dom";

// import

export const Login = () => {
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Faça o login a seguir:</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Logar</button>
      </form>
      <p>
        Ainda não tem cadastro? Então vamos ao <Link to="/">Cadastro</Link>.
      </p>
    </>
  );
};
