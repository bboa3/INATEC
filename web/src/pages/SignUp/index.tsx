import React, { useState, FormEvent, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input/styles';
import Alert from '../../components/Alert';
import { Toggle, CheckMark } from '../Login/styles';
import { 
  Form, 
} from './styles';

import api from '../../services/api';
import HandleErrors from '../../errors/handler';

import { AuthContext } from '../../contexts';

const SignUp: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const history = useHistory();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ accessKey, setAccessKey ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cfrPassword, setCfrPassword ] = useState('');
  const [ course, setCourse ] = useState('');
  const [ time, setTime ] = useState('');
  const [ year, setYear ] = useState('');
  const [ teacher, setTeacher ] = useState(false);
  const [ classInfo, setClassInfo ] = useState({display: 'block'});
  const [ studentInfoRequired, setStudentInfoRequired ] = useState(true);

  const [ alertMessage, setAlertMessage ] = useState('');

  const [ alertStyles, setAlertStyles ] = useState({
    display: 'none', 
    background: 'var(--light-blue)'
  });

  useEffect( () => {
    if(teacher === true) {
      setClassInfo({display: 'none'});
      setStudentInfoRequired(false);
    } else {
      setStudentInfoRequired(true);
      setClassInfo({display: 'block'});
    } 
  }, [teacher])

  const HandleSignUp = (e: FormEvent) => {
    e.preventDefault();

    if(password !== cfrPassword) {
      setAlertMessage('As suas palavras-chaves não se correspondem ')
      setAlertStyles({
        display: 'block',
        background: 'var(--error-primary)'
      })
    } else {
      api.post('/inatec/create/user', {
        name,
        username,
        email,
        phone,
        gender,
        teacher,
        course,
        time,
        year,
        password
      }).then((response) => {
        setName('')
        setUsername('')
        setEmail('')
        setPhone('')
        setGender('')
        setCourse('')
        setTime('')
        setYear('')
        setPassword('')

        if(!data.user.teacher === true) {
          const user = response.data;
          const uClass = response.data.class;

          setData({...data, user: user, uClass: uClass});

          history.push(`/in/class/${response.data.class.id}`);
        } else {
          const user = response.data;
          setData({...data, user: user});

          history.push(`/in/all-class`);
        }
      }).catch(err => {
        const error = HandleErrors.render(err.response.data);
        setAlertMessage(error);

        setAlertStyles({
          display: 'block',
          background: 'var(--error-primary)'
        })
      })
    }
  }

  return (
    <>
      <Alert 
        styles={alertStyles}
        message={alertMessage}
      />

      <FormContainer
        Form={
          <Form onSubmit={HandleSignUp}>
            <fieldset>
              <legend>Dados pessoais</legend>
              <Input 
                name="name" 
                placeholder="Nome completo"
                value={name}
                onChange={ (e) => { setName(e.target.value) }}
                required
              />

              <Input 
                name="email" 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={ (e) => { setEmail(e.target.value) }}
                required
              />
              
              <Input 
                name="phone" 
                type="tel"
                placeholder="Número do celular"
                value={phone}
                onChange={ (e) => { setPhone(e.target.value) }}
                required
              />

              <Input 
                name="username" 
                placeholder="username"
                value={username}
                onChange={ (e) => { setUsername(e.target.value) }}
                required
              />

              <Input 
                name="gender" 
                list="genders"
                placeholder="Seu género"
                value={gender}
                onChange={ (e) => { setGender(e.target.value) }}
              />
              <datalist id="genders">
                <option value="Masculino" />
                <option value="Feminino" />
              </datalist>

              <Input 
                name="accessKey"
                type='password'
                placeholder="Chave de acesso"
                autoComplete="accessKey key"
                value={accessKey}
                onChange={ (e) => { setAccessKey(e.target.value) }}
                required
              />

              <Input 
                name="password"
                type='password' 
                placeholder="palavra-chave"
                autoComplete="new-password"
                value={password}
                onChange={ (e) => { setPassword(e.target.value) }}
                required
              />

              <Input 
                name="cfrPassword"
                type='password'
                placeholder="confirmar palavra-chave"
                autoComplete="new-password"
                value={cfrPassword}
                onChange={ (e) => { setCfrPassword(e.target.value) }}
                required
              />
            </fieldset>

            <fieldset>
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

              <div style={classInfo}>
                <label htmlFor="course">Selecione o Curso</label>
                <Input 
                  name="course" 
                  id="course" 
                  list="courses"
                  value={course}
                  onChange={ (e) => { setCourse(e.target.value) }}
                  required={studentInfoRequired}
                />
                <datalist id="courses">
                  <option value="Contabilidade" />
                  <option value="Construção Civil" />
                  <option value="Electricidade Industrial" />
                  <option value="Enfermagem Geral" />
                  <option value="Educação de infância" />
                  <option value="Farmácia" />
                  <option value="Gestão de recursos Humanos" />
                  <option value="Gestão de Logística Aduaneira" />
                  <option value="Saúde Materno" />
                  <option value="Tecnologias de informação e comunicação" />
                  <option value="Mecânica Industrial" />
                  <option value="Medicina Geral" />
                </datalist>
              </div>

              <div style={classInfo}>
                <label htmlFor="year">Selecione o ano</label>
                <Input 
                  name="year" 
                  id="year" 
                  list="years"
                  value={year}
                  onChange={ (e) => { setYear(e.target.value) }}
                  required={studentInfoRequired}
                />
                <datalist id="years">
                  <option value="1º ano" />
                  <option value="2º ano" />
                  <option value="3º ano" />
                </datalist>
              </div>

              <div style={classInfo}>
                <label htmlFor="time">Selecione o horário</label>
                <Input 
                  name="time" 
                  id="time" 
                  list="times"
                  value={time}
                  onChange={ (e) => { setTime(e.target.value) }}
                  required={studentInfoRequired}
                />
                <datalist id="times">
                  <option value="turma da manhã" />
                  <option value="turma da tarde" />
                  <option value="noturno" />
                </datalist>
              </div>
            </fieldset>

            <button type="submit">
              Salvar inscrição
            </button>
          </Form>
        }
      />
    </>
  )
}

export default SignUp;