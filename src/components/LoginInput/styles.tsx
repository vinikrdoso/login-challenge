import styled from "styled-components";

interface Props {
  errorMsg: string;
}

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  padding-left: 10px;

  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  color: #383e71;
`;

export const InputWrapper = styled.div<Pick<Props, "errorMsg">>`
  width: 256px;
  height: 48px;

  border: ${({ errorMsg }) =>
    errorMsg ? "1px solid #ff377f" : "1px solid #989fdb"};
  box-sizing: border-box;
  border-radius: 8px;

  display: flex;
  align-items: center;
`;

export const InternalInput = styled.input<Pick<Props, "errorMsg">>`
  width: 100%;
  height: 100%;
  padding-left: 15px;

  border: none;
  outline: 0;

  background: rgba(0, 0, 0, 0.003);
  font-style: italic;
  font-weight: 300;
  font-size: 10px;
  color: ${({ errorMsg }) => (errorMsg ? "#383E71" : "#989fdb")};
`;

export const ErrorIcon = styled.span`
  padding: 20px;

  font-weight: bold;
  font-size: 15px;
  color: #ff377f;
`;

export const ErrorMsg = styled.span`
  padding-left: 15px;

  font-size: 10px;
  color: #ff377f;
`;
