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
  time: string
  year: string;
}

const AddSubject: React.FC<Props> = ({
  setPushDown,
  pushDown, 
  username, 
  avatar, 
  course, 
  time, 
  year
}) => {
  const { data, setData } = useContext(AuthContext);
  const [ title, setTitle ] = useState('');
  const [ module, setModule ] = useState('');
  const [ pdf, setPdf ] = useState('');
  const [ titleType, setTitleType ] = useState('');
  const [ description, setDescription ] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { username } = data.user;
    const classId = data.uClass.id;

    api.post('/inatec/create/subjects', {
      classId,
      username,
      titleType,
      title,
      module,
      pdf,
      description
    })
    .then(response => {
      setTitleType('');
      setTitle('');
      setModule('');
      setPdf('');
      setDescription('');

      const subjects = response.data;

      setData({...data, subjects: subjects })
    })

    // socket.emit('newSubject', {
    // });
    // socket.on('getSubjects', (subjects: Subjects) => {
    //   console.log(subjects);
    // })
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
                <option value="Pergunta" />
                <option value="Resposta" />
                <option value="Sugestão de um tema" />
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
                <option value="CCR" />
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
                value={pdf}
                onChange={ (e) => { setPdf(e.target.value) }}
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