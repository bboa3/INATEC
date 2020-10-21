import styled from 'styled-components';


const Input = styled.input`
  width: 90%;
  margin: 0.6rem;
  outline: 0;
  border: none;
  border-bottom: 1px solid var(--dark-blue);

  color: var(--text-in-primary);
  background: transparent;

  @media (min-width: 700px) {
    width: 30rem;
  }

  &::-webkit-file-upload-button {
    display: none;
  }

  &::before {
    content: 'selecione pdf';
    display: inline-block;
    background: var(--dark-blue);
    color: var(--white);
    border-radius: 0.999rem;
    padding: 0.2rem 0.8rem;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    opacity: .8;

    margin-right: 0.4rem;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default Input;