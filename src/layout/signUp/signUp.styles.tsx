import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Mulish', sans-serif;
  padding: 30px 0;
  overflow-y: auto;


  .sign-up{
    background-color: #FEFEFE;
    border-radius: 12px;
    width: 430px;
    padding: 48px 28px;
    box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);

    h2{
        font-size: 36px;
        text-align: center;
        margin: 0 0 36px;
    }

    .sign-button{
        text-transform: none;
        width: 100%;
        border-color: black;
        color: black;
        padding: 10 24px;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
    }

    .line{
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        margin: 12px 0 28px;

        div{
            border-bottom: 1px solid black;
            height: 1px;
            align-self: center;
        }
        span{
            padding: 0 15px;
        }
    }

    .errorMessage{
        color: #FF4D4F;
        margin: -5px 0 -5px;
    }

    .submit{
        width: 100%;
        padding: 10px 24px;
        margin: 20px 0 12px;
    }

    .already{
        text-align: center;

        .link{
            text-decoration-line: none;
            color: rgba(98, 0, 238, 1);
        }
    }
  }
`;