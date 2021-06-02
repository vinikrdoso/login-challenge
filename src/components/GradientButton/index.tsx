import { Button, Text } from "./styles";

type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};

export function GradientButton(props: ButtonProps) {
  return (
    <Button {...props}>
      {props.loading ? <Text>CARREGANDO</Text> : <Text>ENTRAR</Text>}
    </Button>
  );
}
