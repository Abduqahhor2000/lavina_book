import styled from "styled-components";

export const LayoutScreen = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`;

export const BgDiv = styled.div`
    position: absolute;
    width: 3000px;
    height: 2000px;
    background-color: rgba(51, 51, 51, 1);
    border-radius: 50px;
    transform: rotate(130deg);
    right: 45vw;
    top: -400px;
    transform-origin: 50%;
    z-index: -1;
`;
