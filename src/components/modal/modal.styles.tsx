import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 430px;
  background-color: #fff;
  border-radius: 12px;
  padding: 28px 24px;

  .editbook {
    font-size: 20px !important;
    font-weight: 600;
    margin: 0 0 28px;
  }

  .errorMessage {
    color: #ff4d4f;
    margin: -5px 0 -5px;
  }

  .buttons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .submit {
    width: 100%;
    padding: 10px 24px;
    margin: 20px 0 12px;
  }
`;
