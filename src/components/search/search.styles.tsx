import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
  width: 380px;
  background-color: transparent;

  input {
    padding: 12px 62px;
    width: 100%;
    font-size: 16px;
    border-radius: 6px;
    background-color: transparent;
    outline: none;
    border: none;
    transition: .3s;

    &:focus{
        background-color: white;
    }

    &::placeholder {
      color: #FEFEFE;
      opacity: 0.64;
      transition: 0.01s;
    }
  }
  .search {
    position: absolute;
    top: 9px;
    left: 24px;
  }
  .exit {
    display: none;
    position: absolute;
    top: 11px;
    right: 26px;
    cursor: pointer;
  }
  .valid{
    input{
        background-color: white;
    }
    .exit{
        display: block;
    }
  }
`;
