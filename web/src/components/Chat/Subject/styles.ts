import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.4rem 0;

  > p {
    font-family: Archivo;
    font-size: 1.7rem;
    margin-bottom: 1rem;

    > span {
      font-weight: bold;
      margin-right: 0.4rem;
    }
  }

  > div:nth-child(2) {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--light-blue);

    > h2 {
      font-size: 1.8rem;
      color: var(--dark-blue);
      text-align: center;
    }

    > p {
      margin-bottom: 0.5rem;
    }

    > div {
      display: flex;
      justify-content: space-between;

      > span {
        font-size: 1.3rem;
      }

      > button {
        width: 20rem;
        height: 3.3rem;
        background: var(--blue-green);
        
        color: var(--white);
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
    }
  }
`;

export const Profile = styled.span`
  display: flex;

  > div:nth-child(1) img {
    width: 100%;
    height: 100%;
  }

  > div:nth-child(2) {
    margin-left: 1rem;

    > h3 {
      font-size: 1.7rem;
    }

    > span {
      font-size: 1.4rem;
    }
  }

  > span {
    position: absolute;

    right: 16vw;
    top: 1.3rem;
  }
`;