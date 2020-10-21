import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: 1300px) {
    width: 100%;
  }

  > h1 {
    font-size: 1.9rem;

    margin-top: 2rem;
    padding: 0 2rem;
    color: var(--blue);
  }
`;

export const ClassBlock = styled.div`
  margin: 1rem 2rem;

  @media (min-width: 1300px) {
    display: flex;
  }
`;

export const Subject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 3rem;

  @media (min-width: 1300px) {
    border-right: 1px solid var(--blue);
    margin-right: 1.5rem;
  }

  > button {
    font-size: 2.4rem;
    font-weight: bold;

    background-color: transparent;
    color: var(--dark-blue);
    border: none;
    outline: 0;
    cursor: pointer;

    margin-top: 0.4rem;
  }
`;

export const SubjectHeader = styled.div`
  display: flex;

  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--light-blue);

  > img {
    max-width: 18.8rem;
  }
  
  > div h3 {
    font-size: 1.9rem;
    color: var(--red);
    margin-top: 0.8rem;
    margin-left: 0.3rem;

    @media (min-width: 1300px) {
      margin-right: 0.6rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 1.4rem;

  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--light-blue);

  > a {
    text-decoration: none;
    color: var(--text-in-primary);
  }

  > a div:nth-child(2) {
    > h2 {
      font-size: 1.8rem;
      color: var(--dark-blue);
      text-align: center;
    }

    > span {
      font-size: 1.4rem;
      margin-top: 6rem;
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;

  > div:nth-child(1) img {
    width: 100%;
    height: 100%;
  }

  > div:nth-child(2) {
    margin-left: 1rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div h3 {
      font-size: 1.7rem;
    }

    > div span {
      font-size: 1.4rem;
    }

    > div {
      margin-right: 1rem;
    }
  }
`;

export const ClassInfoBlock  = styled.div`
  
`;