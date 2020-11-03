import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--text-in-primary);

  background: var(--light-blue);
  border-radius: 0.999rem;
  margin: 0.9rem;
  transition: background-color 0.5s;

  &:hover {
    background: var(--blue);
  }

  @media (min-width: 700px) {
    width: 70vw;
  }
`;

export const ClassBlock = styled.div`
  width: 60%;
  padding: 1.5rem;

  > h3 {
    font-size: 2rem;
    color: var(--dark-blue);
  }
`;

export const ChefBlock = styled.div`
  width: 40%;
  padding: 1.5rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  > legend {
    font-size: 1.6rem;
    font-weight: bold;
    color: #000;
  }

  > span {
    font-size: 1.4rem;
  }

  > div img {
    width: 100%;
    height: 100%;
  }
`;