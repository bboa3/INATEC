import React, { useState, FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input/styles';
import Alert from '../../components/Alert';
import { AuthContext } from '../../contexts';

import HandleErrors from '../../errors/handler';
import api from '../../services/api';

import { 
  Form, 
  Toggle,
  CheckMark
} from './styles';

const Login: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const history = useHistory();
  const [ username, setUsername ] = useState('');
  const [ teacher, setTeacher ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ alertMessage, setAlertMessage ] = useState('');

  const [ alertStyles, setAlertStyles ] = useState({
    display: 'none', 
    background: 'var(--light-blue)'
  });

  const HandleLogin = (e: FormEvent) => {
    e.preventDefault();

    api.post('/inatec/login', {
      username,
      teacher,
      password
    })
    .then(response => {
      if(response.data.teacher === true) {
        const user = response.data;
        setData({...data, user: user});
        
        history.push(`/in/all-class`);
      } else {
        const user = response.data;
        const uClass = response.data.class;
        
        setData({...data, user: user, uClass: uClass});
        
        history.push(`/in/class/${response.data.class.id}`);
      }
    })
    .catch(err => {
      if(err.response) {
        const error = HandleErrors.render(err.response.data);
        setAlertMessage(error);
        setAlertStyles({
          display: 'block',
          background: 'var(--error-primary)'
        })
      }
    })
  }

  return (
    <>
      <Alert 
        styles={alertStyles}
        message={alertMessage}
      />
      
      <FormContainer
        Form={
          <Form onSubmit={HandleLogin}>
            <fieldset>
              <legend>Fazer login</legend>
              <Input 
                name="username" 
                placeholder="username"
                value={username}
                onChange={ (e) => { setUsername(e.target.value) }}
                required
              />

              <Input 
                name="password"
                type='password' 
                placeholder="palavra-chave"
                value={password}
                onChange={ (e) => { setPassword(e.target.value) }}
                required
              />

              <Toggle>
                <label>
                  Sou aluno
                  <input 
                    type="radio" 
                    defaultChecked 
                    name="radio"
                    onChange={ (e) => { setTeacher(false) } } 
                  />
                  <CheckMark></CheckMark>
                </label>

                <label> 
                  Sou Professor
                  <input 
                    type="radio" 
                    name="radio"
                    checked={teacher}
                    onChange={ (e) => { setTeacher(true) } } 
                    />
                  <CheckMark></CheckMark>
                </label>
              </Toggle>
            </fieldset>

            <button type="submit">
              Enviar
            </button>
          </Form>
        }
      />
    </>
  )
}

export default Login;