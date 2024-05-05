import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  padding-bottom: 16px;

  label {
    display: flex;
    flex-direction: column;
    position: relative;

    span {
      padding-bottom: 4px;
      font-size: 14px;
      font-weight: 500;
    }

    img{
        display: none;
        position: absolute;
        bottom: 14px;
        right: 16px;
        width: 20px;
        height: 20px;
    }
  }

  input {
    outline: none;
    padding: 14px 16px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #ebebeb;

    &::placeholder {
      color: black;
      opacity: 0.28;
    }
  }

  .error{
    input{
        border-color: rgba(255, 77, 79, 1);
    }
    img{
        display: block;
    }
    span{
        color: rgba(255, 77, 79, 1);
    }
  }
`;
