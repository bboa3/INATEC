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

  th {
    border: 0.1px solid #dddddd;
    padding: 9px 10px;
    background-color: #009879;
    color: var(--white);
    text-align: left;
    font-weight: bold;
  }

  > tbody .table-hours tr td {
    white-space: nowrap;
  }

  > tbody .content {
    padding: 9px 8px;
  }
  > tbody .content.header {
    font-weight: bold;
  }

  > tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  > tbody {
    border-bottom: 0.2rem solid #009879;
    font-size: 1.5rem;
    font-family: Archivo;
  }

  > tbody tr:hover {
    color: #009879;
    font-weight: bold;
  }

  @media (min-width: 786px) {
    display: block;
  }

`;