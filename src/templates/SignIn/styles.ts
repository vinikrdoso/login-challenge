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
    display: flex;
    justify-content: center;
    padding: 10px;
    background: #faf5ff;
    border-radius: 8px;
  }
`;

export const WelcomeText = styled.span`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #383e71;

  margin-bottom: 20px;

  @media (max-width: 450px) {
    font-size: 24px;
    color: #383e71;
    margin-bottom: 16px;
  }
`;

export const InstructionText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #989fdb;

  margin-bottom: 40px;

  @media (max-width: 450px) {
    font-size: 12px;
    margin-bottom: 20px;
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
    align-items: center;
    color: #ffffff;

    a {
      color: #ffffff;
      font-weight: 400;
    }
  }
`;
