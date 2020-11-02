import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.2rem 1.2rem 6rem 1.2rem;
  
  @media (min-width: 700px) {
    margin: 2rem 10%;
  }
`;

export const Course = styled.div`
  text-align: center;
  margin-top: 1.4rem;
  margin-bottom: 2rem;
  padding-bottom: 0.6rem;

  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  > h2 {
    font-size: 2.4rem;
    font-family: Archivo;

    color: var(--dark-blue);
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  > div {
    background: transparent;
    margin-right: 0.4rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  > span {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--dark-blue);
  }
`;

export const NewSubject = styled.div`
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }

  > span {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--white);
  }

  > svg {
    width: 3rem;
    height: 3rem;
    color: var(--white);
    margin-right: 0.2rem;
  }
`;

export const Form = styled.form`
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
    margin-top: 1rem;
    
    border: none;
    outline: 0;
    opacity: 0.9;
    
    &:hover {
      opacity: 1;
      color: var(--light-blue);
    }
  }
`;

export const InputBlock = styled.div`
  > div textarea {
    width: 85%;
    height: 7rem;
    background: transparent;
    border-color: var(--dark-blue);
    margin-left: 0.7rem;
    margin-top: 0.7rem;

    color: var(--title-blue);
    outline: 0;
    font-size: 1.8rem;
  }

  > div input {
    color: var(--dark-blue);
  }

  @media (min-width: 700px) {
    margin: 5rem 0 0 0;

    display: flex;
    justify-content: space-between;

    > div input {
      font-size: 1.8rem;

      @media (min-width: 1000px) {
        width: 40rem;
      }
    }

    > div textarea {
      width: 90%;
    }
  }

  > div:nth-child(2) {
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;

      margin: 0.4rem 0;

      > label {
        margin-left: 0.8rem;
      }
      > input {
        color: var(--text-in-primary);
      }
    }
  }
`;
