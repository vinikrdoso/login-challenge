import styled from "styled-components";

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

export const InputWrapper = styled.div`
  width: 256px;
  height: 48px;
`;

export const InternalInput = styled.input`
  padding-left: 15px;
  background: rgba(0, 0, 0, 0.003);
  font-style: italic;
  font-weight: 300;
  font-size: 10px;

  outline: 0;

  width: 100%;
  height: 100%;

  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;

  color: #989fdb;
`;
