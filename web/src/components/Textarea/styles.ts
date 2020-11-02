import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > label {
    font-size: 1.6rem;
  }

  > textarea {
    width: 100%;
    height: 13rem;
    min-width: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: #F8F8FC;
    border: 1px solid #E6E6F0;
    color: var(--text-in-primary);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    width: calc(100% - 20.2rem);
    height: 2px;
    content: '';
    background-color: var(--blue);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;