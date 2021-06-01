import styled from "styled-components";

export const Button = styled.button`
  width: 256px;
  height: 48px;

  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  border: none;

  margin-bottom: 25px;

  @media (max-width: 450px) {
    margin-bottom: -30px;

    width: 168px;
    box-shadow: none;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;

  color: #ffffff;
`;
