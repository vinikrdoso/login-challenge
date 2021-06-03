import "../styles/global.css";
import { Provider } from "react-redux";

import configureStore from "../store/configureStore";

import { Wrapper, ImgContainer, Overlay, Img } from "../styles";

function MyApp({ Component, pageProps }) {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Wrapper>
        <ImgContainer>
          <Overlay />
          <Img />
        </ImgContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
