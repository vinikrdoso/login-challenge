import { Button, Text } from "./styles";

type ButtonProps = {
  onClick: () => void;
};

export function GradientButton(props: ButtonProps) {
  return (
    <Button {...props}>
      <Text>ENTRAR</Text>
    </Button>
  );
}
