import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 2rem;

  > div:nth-child(2) {
    text-align: right;
    
    > button {
      width: 14rem;
      height: 2.8rem;
      background: var(--dark-blue);
      
      color: var(--white);
      font-family: Archivo;
      font-weight: bold;
      font-size: 1.7rem;
      cursor: pointer;
      
      border-radius: 0.9rem;
      border: none;
      outline: 0;

      opacity: 0.9;

      margin-right: 0.4rem;
      
      &:hover {
        opacity: 1;
        color: var(--light-blue);
      }
    }
  }
`;