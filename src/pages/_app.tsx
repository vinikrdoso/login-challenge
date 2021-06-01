import "../styles/global.scss";

import { Wrapper, ImgContainer, Overlay, Img } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <ImgContainer>
        <Overlay />
        <Img />
      </ImgContainer>
      <main>
        <Component {...pageProps} />
      </main>
    </Wrapper>
  );
}

export default MyApp;
