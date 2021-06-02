import styled from "styled-components";

interface Props {
  errorMsg: string;
}

export const InputContainer = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 5px;

  display: inline-block;

  padding-left: 10px;

  text-transform: uppercase;

  color: #383e71;
`;

export const InputWrapper = styled.div<Pick<Props, "errorMsg">>`
  width: 256px;
  height: 48px;

  border: 1px solid #989fdb;
  border: ${({ errorMsg }) =>
    errorMsg ? "1px solid #ff377f" : "1px solid #989fdb"};
  box-sizing: border-box;
  border-radius: 8px;

  display: flex;

  align-items: center;
`;

export const InternalInput = styled.input<Pick<Props, "errorMsg">>`
  padding-left: 15px;
  background: rgba(0, 0, 0, 0.003);
  font-style: italic;
  font-weight: 300;
  font-size: 10px;

  outline: 0;

  width: 100%;
  height: 100%;

  border: none;
  color: ${({ errorMsg }) => (errorMsg ? "#383E71" : "#989fdb")};
`;

export const ErrorIcon = styled.span`
  color: #ff377f;
  padding: 20px;
  font-weight: bold;
  font-size: 15px;
`;

export const ErrorMsg = styled.span`
  color: #ff377f;
  font-size: 10px;
  padding-left: 15px;
`;
