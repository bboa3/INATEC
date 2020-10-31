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
  const [ title, setTitle ] = useState('');
  const [ module, setModule ] = useState('');
  const [ pdf, setPdf ] = useState('');
  const [ titleType, setTitleType ] = useState('');
  const [ description, setDescription ] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // async function send() {
    //   socket.emit('newSubject', {
    //     classId: "1fac9f18-8e02-48cb-aebd-5388079f0349",
    //     username: "dortt",
    //     titleType,
    //     title,
    //     module,
    //     pdf,
    //     description
    //   });
    // }

    // send().then(() => {
    //   setTitleType('');
    //   setTitle('');
    //   setModule('');
    //   setPdf('');
    //   setDescription('');
    // })
  }

  // socket.on('getSubjects', (subjects: any) => {
  //   console.log(subjects);
  // })

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