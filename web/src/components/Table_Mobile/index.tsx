import React, { useContext } from 'react';
import { Table } from './styles';
import { AuthContext } from '../../contexts';

const TableMobile: React.FC = () => {
  const { schedule } = useContext(AuthContext).data.uClass;


  if(!schedule) {
    return <p>Carregando...</p>

  } else {
    const { monday, tuesday, thursday, wednesday, friday, saturday, } = schedule;

    return (
        <Table>
          {
            monday && (
              monday.map(teacher =>  (
                <tbody key={teacher.name}>
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
            )
          }
          {
            tuesday && (
              tuesday.map(teacher =>  (
                <tbody key={teacher.name}>
                  <tr>
                    <th rowSpan={13}>3ª feira</th>
                  </tr>
                  {
                    teacher.time.split(",").map((time) => (
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
            )
          }
          {
            wednesday && (
              wednesday.map(teacher =>  (
                <tbody key={teacher.name}>
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
            )
          }
          {
            thursday && (
              thursday.map(teacher =>  (
                <tbody key={teacher.name}>
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
            )
          }
          {
            friday && (
              friday.map(teacher =>  (
                <tbody key={teacher.name}>
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
            )
          }
          {
            saturday && (
              saturday.map(teacher =>  (
                <tbody key={teacher.name}>
                  <tr>
                    <th rowSpan={13}>Sábado</th>
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
            )
          }
        </Table>
    )
  }
}

export default TableMobile;