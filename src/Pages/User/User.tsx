import { FormikProvider, useFormik } from "formik";
import TextInput from "../../Components/Form/TextInput";
import Button from "../../Components/Button/Button";
import * as Yup from "Yup";
import NavBar from "../../Components/navegation";
import axios from "axios";
import "./user.css";
//import { v4 as uuid } from 'uuid';

interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

interface CreateUserEntry {
  name: string;
  email: string;
  senha: string;
}

const errorMessage = "campo obrigatório";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(errorMessage),
  email: Yup.string().required(errorMessage).email("E-mail inválido"),
  senha: Yup.string().required(errorMessage),
});

export default function User() {
  const form = useFormik<CreateUserEntry>({
    initialValues: {
      name: "",
      email: "",
      senha: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
     <NavBar />
      <div className="container">
        <h1 className="title">Cadastrar</h1>
        <div className="input-group">
          <FormikProvider value={form}>
            <TextInput name="name" label="Nome" placeholder="Digite o nome" />
            <TextInput
              name="email"
              label="E-mail"
              placeholder="Digite o email"
            />
            <TextInput
              name="senha"
              label="Senha"
              placeholder="Digite a senha"
            />
            <div className="buttons">
              <Button
                type="submit"
                text="Salvar"
                onClick={form.handleSubmit}
                className="button button-primary"
              />
              <Button
                type="button"
                text="Cancelar"
                onClick={form.resetForm}
                className="button button-secondary"
              />
            </div>
          </FormikProvider>
        </div>
      </div>
    </>
  );
}
