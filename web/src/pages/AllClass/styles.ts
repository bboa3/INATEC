import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Main = styled.main`
  margin-top: 7rem;
  padding-top: 3.4rem;

  background: var(--white);
  border-top-left-radius: 2.3rem;
  border-top-right-radius: 2.3rem;

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 12rem;
  }
`;
