import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > #push-up {
    top: 16.6rem;
    transition: top 1.2s ease-in-out;

    @media (min-width: 700px) {
      top: 14.1rem;
    }
  }

  > #push-down{
    top: 52.6rem;
    transition: top 1.2s ease-in-out;

    @media (min-width: 700px) {
      top: 48rem;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 93vh;

  background: var(--white);
  border-top-left-radius: 2.3rem;
  border-top-right-radius: 2.3rem;

  position: absolute;
  padding-bottom: 5rem;

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  margin: 0 2rem;

  @media (min-width: 700px) {
    margin: 0 13%;
  }
`;