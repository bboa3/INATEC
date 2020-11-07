import React, { useContext, useEffect, useState } from 'react';
import { Container, Main } from './styles';
import Class from '../../components/Class';
import Alert from '../../components/Alert';

import manChef from '../../assets/images/man-chef.svg';

import { AuthContext } from '../../contexts';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const AllClass: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const [ alertMessage, setAlertMessage ] = useState('');

  const [ alertStyles, setAlertStyles ] = useState({
    display: 'none', 
    background: 'var(--light-blue)'
  });

  useEffect(() => {
    api.get('/inatec/class')
    .then(response => {
      const allClass = response.data;

      setData({...data, allClass: allClass });
    }).catch(err => {
      setAlertMessage('Não foi possível carregar dados. Por favor, recarregue a pagina.')

      setAlertStyles({
        display: 'block',
        background: 'var(--error-primary)'
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Alert 
        styles={alertStyles}
        message={alertMessage}
      />
     <Main>
        {
          
          data.allClass && (
            data.allClass.map(clas => (
              <Link key={clas.id} to={`/in/class/${clas.id}`}>
                <Class
                  turma={clas.course}
                  description={clas.time + clas.year}
                  chefName="Vicente Mateus"
                  avatar={manChef}
                />
              </Link>
            ))
          )
        }

        {
          !data.allClass && <p>Carregando...</p>
        }
     </Main>
    </Container>
  )
}

export default AllClass;