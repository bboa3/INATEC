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
    opacity: 0.9;
    
    &:hover {
      opacity: 1;
      color: var(--light-blue);
    }
  }

  @media (min-width: 700px) {
    width: 70vw;
    height: 90vh;
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

    > button {
      margin-left: 40%;
      margin-top: 2rem;
    }
  }
`;


export const Toggle = styled.div`
  margin-top: 2rem;

  > label {
    display: block;
    position: relative;
    padding-left: 3.5rem;
    margin-bottom: 1.2rem;
    cursor: pointer;
    font-weight: bold;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover input ~ span {
      background-color: #ccc;
    }

    > input {
      position: absolute;
      opacity: 0;
      cursor: pointer;

      &:checked ~ span {
        background-color: var(--dark-blue);
      }

      &:checked ~ span:after {
        display: block;
      }
    }
  }
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;

    top: 0.9rem;
    left: 0.9rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: white;
  }
`;