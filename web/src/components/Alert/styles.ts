import styled from 'styled-components';

export const Container = styled.div`

  > div {
    max-width: 46rem;
    margin: 0.2rem;
    padding: 1rem;
    border-radius: 0.2rem;
    opacity: 0.8;
    box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.1);
    > span {
      opacity: 1;
    }
  }
  

  position: absolute;
  animation-name: Alert;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  top: -4rem;
  left: 35%;

  @keyframes Alert {
    0% {
        top: -4rem;
    }

    100% {
        top: 1%;
    }
  }
`;
