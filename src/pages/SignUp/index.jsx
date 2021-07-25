import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";

// import

function SignUp() {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/^[a-zA-Z]+$/, "Preencher apenas com letras!"),
    email: yup.string().email().required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 caracteres!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>?]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha deve ter ao menos 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial."
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), "As senhas devem ser iguais!"]),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    // course_modules: yup.select().option().required("Selecionar um módulo!"),
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
      <h1>Faça o cadastro a seguir:</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <input
          type="password"
          placeholder="confirmPassword"
          {...register("confirmPassword")}
        />
        <input placeholder="Fale um pouco sobre você." {...register("bio")} />
        {errors.bio?.message}
        <input
          placeholder="Escreva uma forma de contato."
          {...register("contact")}
        />
        {errors.contact?.message}
        <select {...register("course_module")}>
          {/* <option value="" selected>
            Selecione um módulo
          </option> */}
          <option value="">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="" selected>
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="">Terceiro módulo (Introdução ao Backend)</option>
          <option value="">Quarto módulo (Backend Avançado)</option>
        </select>
        <button type="submit">Submeter</button>
      </form>
      <p>
        Já tem cadastro? Então vamos ao <Link to="/login">Login</Link>!
      </p>
    </>
  );
}

export default SignUp;
