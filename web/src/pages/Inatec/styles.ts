import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const TopSection = styled.div`
  position: relative;
  width: 100%;
  height: 65%;

  @media (min-width: 700px) {
    height: 100%;
  }

  > h1 {
    width: 100%;
    height: 30%;
    position: absolute;

    > span {
      font-size: 2.4rem;
      margin: 20% .5rem;
      text-align: center;

      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--white);
      font-family: Archivo;

      @media (min-width: 700px) {
        display: none;
      }
    }
  }
`;

export const InatecStudents = styled.div`
 > img {
    width: 100%;
    max-height: 85%;
    opacity: 0.2;

    @media (min-width: 700px) {
      width: 52%;
      max-height: 100%;

      float: right;
      opacity: 1;
    }
  }
`;

export const Buttons = styled.div`
  text-align: center;
  margin-top: 3rem;

  @media (min-width: 700px) {
    display: flex;
    justify-content: flex-end;

    margin-top: 60vh;
    
    > div {
      margin-right: 18vw;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    
    > a button {
      width: 18rem;
      height: 3.3rem;
      background: var(--dark-blue);

      color: var(--white);
      font-family: Archivo;
      font-weight: bold;
      font-size: 1.9rem;
      cursor: pointer;

      border-radius: 0.9rem;

      border: none;
      opacity: 0.9;

      @media (min-width: 700px) {
        width: 22rem;
        height: 3.8rem;
      }

      &:hover {
        opacity: 1;
        color: var(--light-blue);
      }
    }

    > a {
      text-decoration: none;
      font-family: Archivo;
      font-weight: bold;
      font-size: 1.9rem;
      opacity: 0.9;

      color: var(--dark-blue);
      margin: 0.2rem;

      &:hover {
        opacity: 1;
      }
    }
  }

  
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 38%;

  background: var(--white);
  border-top-left-radius: 2.3rem;
  border-top-right-radius: 2.3rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
      display: none;
    }
  }

  @media (min-width: 700px) {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    border-top-left-radius: 0;
    border-top-right-radius: 2.1rem;
    border-bottom-right-radius: 2.1rem;

    > div {
      display: flex;
      flex-direction: column;

      > h1 {
        display: block;
        font-size: 2.4rem;
        text-align: center;
        color: var(--dark-blue);
        
        margin: 30vh 2rem 2.3rem 2rem;
      }
    }
  }
`;

export const UnderBooks = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 18.3rem;
    height: 20.5rem;
  }

  @media (min-width: 700px) {
    width: 100%;
    height: 40vh;

    > img {
      width: 36.2rem;
      height: 36.2rem;
      margin: 3rem;
    }
  }
`;

export const Logo = styled.div`
  width: 40%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 6rem;
  > img {
    width: 12rem;
    height: 6.9rem;
  }

  @media (min-width: 700px) {
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: flex-start;

    margin: 2rem;

    > img {
      width: 10.9rem;
      height: 6.3rem;
      
    }
  }
`;


