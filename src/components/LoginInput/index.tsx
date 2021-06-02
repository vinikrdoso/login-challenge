import {
  InputContainer,
  Label,
  InputWrapper,
  InternalInput,
  ErrorMsg,
  ErrorIcon,
} from "./styles";

type InputProps = {
  type: string;
  errorMsg: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function LoginInput({ type, onChange, errorMsg }: InputProps) {
  return (
    <InputContainer>
      <Label>{type}</Label>
      <InputWrapper errorMsg={errorMsg}>
        <InternalInput
          type={type === "senha" ? "password" : "email"}
          errorMsg={errorMsg}
          onChange={(e) => onChange(e)}
        />
        {errorMsg && <ErrorIcon>x</ErrorIcon>}
      </InputWrapper>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </InputContainer>
  );
}
