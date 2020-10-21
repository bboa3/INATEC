import React from 'react';
import { Table } from './styles';

const TableDesktop: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th rowSpan={2}>Horas</th>
          <th colSpan={2}>2ª feira</th>
          <th  colSpan={2}>3ª feira</th>
          <th  colSpan={2}>4ª feira</th>
          <th  colSpan={2}>5ª feira</th>
          <th  colSpan={2}>6ª feira</th>
        </tr>
        <tr>
          <th>Disciplina</th>
          <th>Docente</th>
          <th>Disciplina</th>
          <th>Docente</th>
          <th>Disciplina</th>
          <th>Docente</th>
          <th>Disciplina</th>
          <th>Docente</th>
          <th>Disciplina</th>
          <th>Docente</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>07:00 - 07:45</td>
          <td>HST</td>
          <td>Telma</td>
          <td>AFECC</td>
          <td>Simbine</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>RPESVPC</td>
          <td>Paunde</td>
          <td>UUSSPP</td>
          <td>Garcias</td>
        </tr>
        <tr>
          <td>07:45 - 08:30</td>
          <td>HST</td>
          <td>Telma</td>
          <td>AFECC</td>
          <td>Simbine</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>RPESVPC</td>
          <td>Paunde</td>
          <td>UUSSPP</td>
          <td>Garcias</td>
        </tr>
        <tr>
          <td>08:40 - 09:25</td>
          <td>HST</td>
          <td>Telma</td>
          <td>AFECC</td>
          <td>Simbine</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>ATFEA</td>
          <td>Hélio</td>
          <td>AFECC</td>
          <td>Simbine</td>
        </tr>
        <tr>
          <td>09:25 - 10:10</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>AFECC</td>
          <td>Simbine</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>ATFEA</td>
          <td>Hélio</td>
          <td>AFECC</td>
          <td>Simbine</td>
        </tr>
        <tr>
          <td>10:20 - 11:05</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>IPEEOCIF</td>
          <td>Matsinhe</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>ATFEA</td>
          <td>Hélio</td>
          <td>AFECC</td>
          <td>Simbine</td>
        </tr>
        <tr>
          <td>11:05 - 11:55</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>IPEEOCIF</td>
          <td>Matsinhe</td>
          <td>CCCR</td>
          <td>Chilundo</td>
          <td>ATFEA</td>
          <td>Hélio</td>
          <td>AFECC</td>
          <td>Simbine</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableDesktop;