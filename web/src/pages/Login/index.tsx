import React, { useState, FormEvent } from 'react';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input/styles';
import { 
  Form, 
  Toggle,
  CheckMark
} from './styles';

const Login: React.FC = () => {
  const [ username, setUsername ] = useState('');
  const [ teacher, setTeacher ] = useState(false);
  const [ password, setPassword ] = useState('');

  const HandleLogin = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <>
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