import styled from 'styled-components';

export const WrapperTable = styled.div`
    margin-top: 2rem;
    & > table > thead > tr > th {
        background-color: #000;
        color: #fff;
        font-size: 1.5rem;
    }
    & > table > tbody > tr > td {
        padding: 20px
        font-size: 1rem;
        background-color: #ccc;
    }
`;
