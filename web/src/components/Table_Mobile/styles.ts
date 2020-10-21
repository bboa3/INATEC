import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 0.8em;
  max-width: 500px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  > tbody {
    border-bottom: 5px solid #009879;
    margin-bottom: 5px;

    > tr th {
      font-size: 1.7rem;
      background-color: #09a082af;
      color: var(--white);
    }

    > tr th, tr td {
      padding: 9px 10px;
      border: 1px solid #dddddd;
    }

    > tr td {
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
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

  @media (min-width: 786px) {
    display: none;
  }
`;