import { InputContainer, Label, InputWrapper, InternalInput } from "./styles";

type InputProps = {
  type: string;
};

export function LoginInput({ type }: InputProps) {
  return (
    <InputContainer>
      <Label>{type}</Label>
      <InputWrapper>
        <InternalInput type={type === "senha" ? "password" : "email"} />
      </InputWrapper>
    </InputContainer>
  );
}
