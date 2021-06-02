import { useState } from "react";
import Head from "next/head";

import { LoginInput } from "../../components/LoginInput";
import { GradientButton } from "../../components/GradientButton";

import validator from "validator";

import {
  FormContainer,
  WelcomeText,
  InstructionText,
  ForgotPasswordText,
  Content,
  ForgotPasswordContainer,
} from "./styles";

export default function Home({ onSubmit }) {
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const handleFormValidate = () => {
    setEmailErrMsg("");
    setPasswordErrMsg("");
    if (!validator.isEmail(email)) {
      setEmailErrMsg("Digite um e-mail válido.");
      return;
    }
    if (validator.isEmpty(password)) {
      setPasswordErrMsg("Senha não está preenchida.");
      return;
    }

    onSubmit(email, password);
  };

  return (
    <FormContainer>
      <Head>
        <title>Login Challenge</title>
      </Head>

      <Content>
        <WelcomeText>Olá, seja bem-vindo!</WelcomeText>

        <InstructionText>
          Para acessar a plataforma, faça seu login.
        </InstructionText>

        <LoginInput
          type="e-mail"
          onChange={(e) => setEmail(e.target.value)}
          errorMsg={emailErrMsg}
        />
        <LoginInput
          type="senha"
          onChange={(e) => setPassword(e.target.value)}
          errorMsg={passwordErrMsg}
        />

        <GradientButton onClick={handleFormValidate} />
      </Content>
      <ForgotPasswordContainer>
        <ForgotPasswordText>Esqueceu seu login ou senha?</ForgotPasswordText>
        <ForgotPasswordText>
          Clique <a>aqui</a>
        </ForgotPasswordText>
      </ForgotPasswordContainer>
    </FormContainer>
  );
}
