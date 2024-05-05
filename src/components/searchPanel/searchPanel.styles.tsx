import styled from "styled-components";

export const Panel = styled.div`
padding: 36px 0;
width: 100%;

    .result{
        font-size: 26px;
        font-weight: 700;
        color: white;
        margin-bottom: 36px;
    }
    .loading{
        font-size: 26px;
        font-weight: 700;
        color: white;
        margin-bottom: 36px;
    }
    .goback{
        color: rgba(98, 0, 238, 1);
        cursor: pointer;
        user-select: none;
    }
    .books{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 24px;
    }
`;
