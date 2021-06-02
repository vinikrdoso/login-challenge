import styled from "styled-components";

export const FormContainer = styled.div`
  width: 256px;

  @media (max-width: 450px) {
    width: 100%;
    padding: 10%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 450px) {
    padding: 10px;

    border-radius: 8px;
    background: #faf5ff;

    display: flex;
    justify-content: center;
  }
`;

export const WelcomeText = styled.span`
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #383e71;

  @media (max-width: 450px) {
    width: 50%;
    margin-bottom: 16px;

    font-size: 24px;
    font-style: normal;
    text-align: center;
    line-height: 35px;
    color: #383e71;
  }
`;

export const InstructionText = styled.span`
  margin-bottom: 40px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989fdb;

  @media (max-width: 450px) {
    margin-bottom: 20px;

    font-size: 12px;
  }
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    margin-top: 50px;
  }
`;

export const ForgotPasswordText = styled.span`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;

  @media (max-width: 450px) {
    font-size: 12px;
    color: #ffffff;

    align-items: center;

    a {
      font-weight: 400;
      color: #ffffff;
    }
  }
`;
