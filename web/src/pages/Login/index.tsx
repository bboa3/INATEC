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
  const [ who, SetWho ] = useState('student');
  const [ password, setPassword ] = useState('');

  const HandleLogin = (e: FormEvent) => {
    e.preventDefault();

    console.log(who);
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
                    value={who} 
                    onChange={ (e) => { SetWho('student') } } 
                  />
                  <CheckMark></CheckMark>
                </label>

                <label> 
                  Sou Professor
                  <input 
                    type="radio" 
                    name="radio"
                    value={who}
                    onChange={ (e) => { SetWho('teacher') } } 
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