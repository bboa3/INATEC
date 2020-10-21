import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 0.8em;
  min-width: 40rem;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  display: none;
  @media (min-width: 1300px) {
    box-shadow: none;
  }

  > thead tr {
    background-color: #009879;
    color: var(--white);
    text-align: left;
    font-weight: bold;
  }

  th, td {
    padding: 9px 10px;
    border: 1px solid #dddddd;
  }

  td {
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  > tbody tr {
    font-weight: bold;
    border-bottom: 1px solid #dddddd;
  }

  > tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  > tbody tr:last-of-type {
    border-bottom: 0.2rem solid #009879;
  }

  > tbody tr:hover {
    color: #009879;
  }

  @media (min-width: 786px) {
    display: block;
  }

`;