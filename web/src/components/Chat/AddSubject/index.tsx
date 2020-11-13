import React, { useState, FormEvent, useContext } from 'react';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Input from '../../../components/Input/styles';
import { 
  Container,
  Profile,
  NewSubject,
  TopSection,
  InputBlock,
  Form,
  Course
} from './styles';

import { AuthContext } from '../../../contexts';
import api from '../../../services/api';

interface Props {
  setPushDown: React.Dispatch<React.SetStateAction<string>>;
  pushDown: string;
  username: string;
  avatar: string;
  course: string;
  time: string;
  year: string;
  disciplines: string;
}

const AddSubject: React.FC<Props> = ({
  setPushDown,
  pushDown, 
  username, 
  avatar, 
  course, 
  time, 
  year,
  disciplines
}) => {
  const { data, setData } = useContext(AuthContext);
  const [ title, setTitle ] = useState('');
  const [ module, setModule ] = useState('');
  const [ pdf, setPdf ] = useState<File>();
  const [ titleType, setTitleType ] = useState('');
  const [ description, setDescription ] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { username } = data.user;
    const classId = data.uClass.id;

    const formData = new FormData();

    formData.append('classId', classId);
    formData.append('username', username);
    formData.append('titleType', titleType);
    formData.append('title', title);
    formData.append('module', module);
    formData.append('description', description);

    if(pdf) {
      formData.append('pdf', pdf);
    }

    api.post('/inatec/create/subjects', formData)
    .then(response => {
      setTitleType('');
      setTitle('');
      setModule('');
      setDescription('');

      const subjects = response.data;

      setData({...data, subjects: subjects })
    })
  }

  return (
    <Container>
      <TopSection>
        <Profile>
          <Avatar>
            <img src={avatar} alt="Profile"/>
          </Avatar>
        <span>{username}</span>
        </Profile>
        
        <NewSubject onClick={ e => { 
          if(pushDown === 'push-up')
          return setPushDown('push-down');
          setPushDown('push-up');
        }}>
          <span>Criar novo tema</span>
          <AddIcon />
        </NewSubject>
      </TopSection>

      <Course>
        <h2>{course}</h2>
      <span>{year}, {time}</span>
      </Course>

      <Form onSubmit={handleSubmit}>
        <InputBlock>
          <div>
            <div>
              <Input 
                name="subjectTip"
                placeholder="tipo do tema"
                list='subjectTips'
                value={titleType}
                onChange={ (e) => { setTitleType(e.target.value) }}
                required
              />
              <datalist id="subjectTips">
                <option value="Nova ficha" />
                <option value="Aviso de um atraso" />
                <option value="Pergunta ao docente" />
                <option value="Pergunta aos colegas" />
                <option value="Resposta" />
                <option value="Sugestão de tema" />
              </datalist>
            </div>
            
            <Input 
              name="title"
              placeholder="Title"
              value={title}
              onChange={ (e) => { setTitle(e.target.value) }}
              required
            />
            
            <div>
              <Input 
                name="module"
                placeholder="Módulo"
                list='modules'
                value={module}
                onChange={ (e) => { setModule(e.target.value) }}
                required
              />
              <datalist id="modules">
                {
                  disciplines.split(",").map(discipline => (
                    <option value={discipline} />
                  ))
                }
              </datalist>
            </div>
          </div>
          
          <div>
            <div>
              <label htmlFor="file">Se não tiver ficheiro, basta pular parte.</label>
              <Input 
                id="file"
                name="file"
                type="file"
                placeholder="pdf"
                onChange={e => {
                  if(!e.target.files)
                  return

                  setPdf(e.target.files[0])
                }}
              />
            </div>

            <textarea 
              name="description"
              placeholder="faça uma pequena descrição"
              value={description}
              onChange={ (e) => { setDescription(e.target.value) }}
              required
            />
          </div>
        </InputBlock>
        
        <button type="submit">
          Publicar
        </button>
      </Form>
    </Container>
  )
}


export default AddSubject;