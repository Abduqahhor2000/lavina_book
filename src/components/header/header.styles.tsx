import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  .logotip {
    display: flex;
    align-items: center;
  }

  .brandname {
    font-size: 18px;
    font-weight: 700;
    color: rgba(98, 0, 238, 1);
    padding: 0 24px 0 20px;

    span {
      color: white;
    }
  }

  .profile {
    display: flex;
    span {
      cursor: pointer;
      width: 32px;
      height: 32px;
      padding: 4px 3px 3px;
      display: block;
      border-radius: 50%;
      margin-left: 24px;
      background: rgb(136, 75, 178);
      background: linear-gradient(
        180deg,
        rgba(136, 75, 178, 1) 0%,
        rgba(253, 100, 142, 1) 100%
      );
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
`;
