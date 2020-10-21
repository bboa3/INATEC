import styled from 'styled-components';

export const Container = styled.div`
  background: var(--light-blue);
  padding: 0.5rem .8rem;

  border-radius: 0.999rem;

  @media (min-width: 700px) {
    padding: 0.8rem 1.2rem;
  }
`;

export const CommentBlock = styled.div`
  > p {
    margin-left: 5rem;
  }
`;

export const Commenter = styled.div`
  display: flex;
  align-items: center;

  > div {
    background: transparent;

    > img {
      width: 100%;
      height: 100%;
    }

    > p {
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--dark-blue);
    }

    > span {
      font-size: 1.3rem;
    }
  }
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(2) span:nth-child(1) {
    margin-right: 0.8rem;
    color: var(--red);
  }

  > div {
    display: flex;
    align-items: center;

    > svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.4rem;
    }
  }

  @media (min-width: 700px) {
    margin: 0 2rem;
  }
`;

export const Reply = styled.div`
  margin-left: 5rem;
  margin-top: 2rem;

  > p {
    margin-left: 5rem;
  }
`;

export const Replier = styled.div`
  display: flex;
  align-items: center;
  
  > div:nth-child(1) {
    background: transparent;

    > img {
      width: 80%;
      height: 80%;
    }
  }

  > div:nth-child(2) {
    > p {
      font-weight: bold;
      color: var(--dark-blue);
    }

    > span {
      font-size: 1.3rem;
    }
  }
`;

export const ReplyFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > span:nth-child(1) {
    margin-right: 0.8rem;
    color: var(--red);
  }

  > span:nth-child(2) {
    display: flex;
    align-items: center;
    
    > svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.4rem;
    }
  }

  @media (min-width: 700px) {
    margin: 0 2rem;
  }
`;