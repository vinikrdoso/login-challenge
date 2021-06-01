import { Button, Text } from "./styles";

type InputProps = {
  type: string;
};

export function GradientButton({ type }: InputProps) {
  return (
    <Button>
      <Text>ENTRAR</Text>
    </Button>
  );
}
