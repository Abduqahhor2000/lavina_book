import styled from "styled-components";

export const TaskPanel = styled.div`
  padding: 36px 0;
  h2 {
    font-size: 36px;
    font-weight: 700px;
    color: white;
    margin: 0 0 13px 0;

    span {
      color: #6200ee;
    }
  }
  & > p {
    font-size: 20px;
    color: white;
    margin: 0;
  }

  .loadingg {
    font-size: 26px;
    font-weight: 700;
    color: white;
    margin-bottom: 36px;
  }

  .tasks {
    padding: 36px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
`;
