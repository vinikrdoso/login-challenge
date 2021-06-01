import Head from "next/head";

import { LoginInput } from "../../components/LoginInput";
import { GradientButton } from "../../components/GradientButton";

import {
  FormContainer,
  WelcomeText,
  InstructionText,
  ForgotPasswordText,
  Content,
  ForgotPasswordContainer,
} from "./styles";

export default function Home({ onSubmit }) {
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

        <LoginInput type="e-mail" />
        <LoginInput type="senha" />

        <GradientButton onClick={onSubmit} />
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
