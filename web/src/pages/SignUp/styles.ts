import styled from 'styled-components';

export const Form = styled.form`
  margin: 2rem;

  > fieldset {
    border: 0;

    > legend {
      color: var(--title-blue);
      font-size: 2rem;
      font-family: Archivo;
      font-weight: bold;

      margin-left: 0.6rem;
    }
  }

  > fieldset + fieldset {
    margin-top: 0;
  }

  > button {
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
    outline: 0;

    opacity: 0.9;
    
    &:hover {
      opacity: 1;
      color: var(--light-blue);
    }
  }

  @media (min-width: 700px) {
    width: 70vw;
    height: 100vh;
    position: absolute;
    left: 20vw;
    top: 10vh;

    background: var(--white);

    @media (min-width: 1220px) {
      height: 70vh;
    }

    > fieldset {
      margin-left: 25%;
      margin-top: 4rem;

      @media (min-width: 1400px) {
        > input {
          margin-right: 2rem;
        }
      }
    }

    > fieldset + fieldset {
      display: flex;
      flex-direction: column;
    }

    > button {
      margin-left: 40%;
      margin-top: 2rem;
    }
  }
`;