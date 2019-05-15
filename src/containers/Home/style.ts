import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem auto;
  align-items: center;
`;

export const ErrorServer = styled(Loading)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem auto;
  align-items: center;
`;
export const ErrorMessage = styled.h1`
  text-align: center;
`;

