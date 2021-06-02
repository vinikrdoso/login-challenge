import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    padding-left: 112px;

    flex: 1;
    z-index: 9;

    @media (max-width: 1024px) {
      padding-left: 0;

      display: flex;
      justify-content: center;
    }

    @media (max-width: 450px) {
      width: 100%;
      margin-top: 100px;
    }
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 60%;
  height: 100%;

  z-index: 3;

  @media (max-width: 1024px) {
    width: 35%;
  }

  @media (max-width: 450px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background: linear-gradient(360deg, #130525 0%, rgba(105, 57, 153, 0) 100%);

  @media (max-width: 450px) {
    background: linear-gradient(
      360deg,
      #130525 40%,
      rgba(105, 57, 153, 0) 100%
    );
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;

  z-index: 1;

  background-image: url("/assets/background.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 450px) {
    width: 100%;
    height: 60%;

    background-image: url("/assets/background.png");
  }
`;
