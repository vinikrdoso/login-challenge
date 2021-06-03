import { Button, Text } from "./styles";

import ClipLoader from "react-spinners/ClipLoader";

type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};

export function GradientButton(props: ButtonProps) {
  return (
    <Button onClick={props.onClick}>
      {props.loading ? (
        <ClipLoader color={"#fff"} loading={props.loading} size={20} />
      ) : (
        <Text>ENTRAR</Text>
      )}
    </Button>
  );
}
