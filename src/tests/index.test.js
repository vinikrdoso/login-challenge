import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "../pages/index";
import axios from "axios";

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const Component = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Component />);
    expect(
      getByText("Para acessar a plataforma, faça seu login.")
    ).toBeInTheDocument();
  });

  it("show error when e-mail input is not correct", () => {
    const { getByLabelText, getByText } = render(<Component />);
    const emailInput = getByLabelText("e-mail");
    const button = getByText("ENTRAR");
    fireEvent.change(emailInput, { target: { value: "vini@mail" } });
    fireEvent.click(button);
    expect(getByText("Digite um e-mail válido.")).toBeInTheDocument();
  });

  it("show error when password input is empty", () => {
    const { getByLabelText, getByText } = render(<Component />);
    const emailInput = getByLabelText("e-mail");
    const button = getByText("ENTRAR");
    fireEvent.change(emailInput, { target: { value: "vini@mail.com" } });
    fireEvent.click(button);
    expect(getByText("Senha não está preenchida.")).toBeInTheDocument();
  });
});
