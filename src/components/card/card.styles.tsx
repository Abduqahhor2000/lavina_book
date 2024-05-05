import styled from "styled-components";

export const CardDiv = styled.div`
  padding: 32px;
  background-color: white;
  border-radius: 12px;
  height: min-content;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position:top;
  }

  .selected{
    opacity: 0.5;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    margin: 0 0 6px 0;
  }
  p{
    font-size: 14px;
    padding: 0;
    margin-bottom: 16px;
  }
  .load{
    padding-left: 25px;
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
      border-radius: 50%;
      font-weight: 400;
    }
  }
`;
