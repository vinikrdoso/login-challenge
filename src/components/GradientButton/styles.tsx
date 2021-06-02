import styled from "styled-components";

export const Button = styled.button`
  width: 256px;
  height: 48px;
  margin-bottom: 25px;

  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  border: none;

  @media (max-width: 450px) {
    width: 168px;
    margin-bottom: -33px;

    box-shadow: none;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;

  color: #ffffff;
`;
