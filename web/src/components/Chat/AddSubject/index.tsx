import React, { useState, FormEvent } from 'react';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import manChef from '../../../assets/images/man-chef.svg';
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

interface Props {
  setPushDown: React.Dispatch<React.SetStateAction<string>>;
  pushDown: string;
  username: string;
}

const AddSubject: React.FC<Props> = ({setPushDown, pushDown, username}) => {
  const [ title, setTitle ] = useState('');
  const [ module, setModule ] = useState('');
  const [ file, setFile ] = useState('');
  const [ subjectTip, setSubjectTip ] = useState('');
  const [ description, setDescription ] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

  }

  return (
    <Container>
      <TopSection>
        <Profile>
          <Avatar>
            <img src={manChef} alt="Profile"/>
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
        <h2>Tecnologias de informação e comunicação</h2>
        <span>1º ano, turma da manhã</span>
      </Course>

      <Form onSubmit={handleSubmit}>
        <InputBlock>
          <div>
            <div>
              <Input 
                name="subjectTip"
                placeholder="tipo do tema"
                list='subjectTips'
                value={subjectTip}
                onChange={ (e) => { setSubjectTip(e.target.value) }}
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
                value={file}
                onChange={ (e) => { setFile(e.target.value) }}
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