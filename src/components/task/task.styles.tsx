import styled from "styled-components";

export const TaskDiv = styled.div`
  padding: 32px;
  background-color: white;
  border-radius: 12px;
  height: min-content;
  position: relative;

  h3 {
    font-size: 16px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    margin: 0 0 12px 0;
  }
  p{
    font-size: 14px;
    padding: 0;
    margin-bottom: 16px;
    color: black;
  }
  .aftir{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

    .pages{
      padding: 2px 12px;
      color: #9654F4;
      font-size: 12px;
      border-radius: 9px;
      font-weight: 400;
      background-color: #EFE6FD;
    }
  }
  .changes{
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    align-items: center;
    top: 0;
    right: 0;
    opacity: 0;
    transition: .3s;
  }

  &:hover{
    .changes{
      opacity: 1;
    }
  }
`;
