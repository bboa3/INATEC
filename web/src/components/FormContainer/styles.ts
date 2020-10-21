import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ImageBlock = styled.div`
  width: 100%;
  height: 28%;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: max-content;

  border-top-left-radius: 2.3rem;
  border-top-right-radius: 2.3rem;

  background: var(--white);

  @media (min-width: 700px) {
    width: 50%;
    height: 100%;

    border-radius: 0;
    background: var(--dark-blue);
  }
`;

export const Contacts = styled.div`
  display: none;

  @media (min-width: 700px) {
    width: 24vw;
    height: 70vh;
    display: block;
    position: absolute;
    left: 11.5vw;
    top: 17.2vh;
    
    background: var(--dark-blue);
    padding: 3rem;
    z-index: 1;

    color: var(--light-blue);

    @media (min-width: 1100px) {
      height: 60vh;
    }

    > legend {
      font-size: 2.4rem;
      font-family: Archivo;
      font-weight: bold;

      margin-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
      opacity: 0.6;
      font-size: 1.8rem;

      margin: 1.8rem 0;

      > div span {
        font-size: 1.4rem;
      }

      > svg {
        width: 3.6rem;
        height: 3.6rem;
        margin-right: 0.6rem;
      }
    }
  }
`;

export const Media = styled.div`
  @media (min-width: 700px) {
    padding-top: 13%;

    > a svg {
      width: 3.6rem;
      height: 3.6rem;

      color: var(--white);
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
`;