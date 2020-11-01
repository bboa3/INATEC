import React, { useContext } from 'react';
import { Table } from './styles';
import { AuthContext } from '../../contexts';

const TableMobile: React.FC = () => {
  const { schedule } = useContext(AuthContext).data.uClass;

  return (
    <Table>
      {
        schedule.monday.map(teacher =>  (
          <tbody>
            <tr>
              <th rowSpan={13}>2ª feira</th>
            </tr>
            {
              teacher.time.split(",").map(time => (
                <>
                  <tr>
                    <td rowSpan={2}>{time}</td>
                    <td>Disciplina</td>
                    <td>{teacher.discipline}</td>
                  </tr>
                  <tr>
                    <td>Docente</td>
                    <td>{teacher.name}</td>
                  </tr>
                </>
              ))
            }
          </tbody>
        ))
      }
      {
        schedule.tuesday.map(teacher =>  (
          <tbody>
            <tr>
              <th rowSpan={13}>3ª feira</th>
            </tr>
            {
              teacher.time.split(",").map(time => (
                <>
                  <tr>
                    <td rowSpan={2}>{time}</td>
                    <td>Disciplina</td>
                    <td>{teacher.discipline}</td>
                  </tr>
                  <tr>
                    <td>Docente</td>
                    <td>{teacher.name}</td>
                  </tr>
                </>
              ))
            }
          </tbody>
        ))
      }
      {
        schedule.wednesday.map(teacher =>  (
          <tbody>
            <tr>
              <th rowSpan={13}>4ª feira</th>
            </tr>
            {
              teacher.time.split(",").map(time => (
                <>
                  <tr>
                    <td rowSpan={2}>{time}</td>
                    <td>Disciplina</td>
                    <td>{teacher.discipline}</td>
                  </tr>
                  <tr>
                    <td>Docente</td>
                    <td>{teacher.name}</td>
                  </tr>
                </>
              ))
            }
          </tbody>
        ))
      }
      {
        schedule.thursday.map(teacher =>  (
          <tbody>
            <tr>
              <th rowSpan={13}>5ª feira</th>
            </tr>
            {
              teacher.time.split(",").map(time => (
                <>
                  <tr>
                    <td rowSpan={2}>{time}</td>
                    <td>Disciplina</td>
                    <td>{teacher.discipline}</td>
                  </tr>
                  <tr>
                    <td>Docente</td>
                    <td>{teacher.name}</td>
                  </tr>
                </>
              ))
            }
          </tbody>
        ))
      }
      {
        schedule.friday.map(teacher =>  (
          <tbody>
            <tr>
              <th rowSpan={13}>6ª feira</th>
            </tr>
            {
              teacher.time.split(",").map(time => (
                <>
                  <tr>
                    <td rowSpan={2}>{time}</td>
                    <td>Disciplina</td>
                    <td>{teacher.discipline}</td>
                  </tr>
                  <tr>
                    <td>Docente</td>
                    <td>{teacher.name}</td>
                  </tr>
                </>
              ))
            }
          </tbody>
        ))
      }
    </Table>
  )
}

export default TableMobile;