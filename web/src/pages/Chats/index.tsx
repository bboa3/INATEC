import React, { useState, useContext, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '../../components/Chat/Comment';
import AddSubject from '../../components/Chat/AddSubject';
import Subject from '../../components/Chat/Subject';
import Textarea from '../../components/Textarea';
import Alert from '../../components/Alert';

import { Container,  Main, Wrapper,} from '../../components/AppLayout/styles';
import { Form } from './styles';
import { AuthContext } from '../../contexts';
import api from '../../services/api';
import moment from '../../utils/moment';

interface subjectsParams {
  id: string;
  index: string;
  title: string;
}

const Chats: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const { id } = useParams<subjectsParams>();
  const [ pushDown, setPushDown ] = useState('push-up');
  const [comment, setComment] = useState('');
  const [ alertMessage, setAlertMessage ] = useState('');

  const [ alertStyles, setAlertStyles ] = useState({
    display: 'none', 
    background: 'var(--light-blue)'
  });

  const { user, uClass, subject } = data;

  useEffect(() => {
    
    api.get(`/inatec/get/subjects/${id}`)
    .then(response => {
      const subjec = response.data;

      setData({...data, subject: subjec})
    })
    .catch(err => {
      console.log(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const HandleComment = (e: FormEvent) => {
    e.preventDefault();

    if(!comment) {
      setAlertMessage('Por favor, escreva o seu comentário antes de comentar.')

      setAlertStyles({
        display: 'block',
        background: 'var(--error-primary)'
      })
    } else {
      setAlertStyles({
        display: 'none', 
        background: 'var(--light-blue)'
      })
      
      api.post('/inatec/comments', {
        id: subject.id,
        userId: user.id,
        comment
      })
      .then(response => {
        setComment('');
        const subjec = response.data;

        setData({...data, subject: subjec})
      })
      .catch(err => {
        console.log(err.response);
      })
    }
  }
  
  return (
    <Container>
      <Alert 
        styles={alertStyles}
        message={alertMessage}
      />

      <AddSubject 
        setPushDown={setPushDown}
        pushDown={pushDown}
        username={user.username}
        avatar={user.avatar}
        course={uClass.course}
        year={uClass.year}
        time={uClass.time}
        disciplines={uClass.disciplines}
      />

      <Main id={pushDown}>
        <Wrapper>
          {
            subject ? (
              <Subject
                subjectCreatorName={subject.name}
                subjectCreatorType={subject.teacher ? 'Docente' : 'Aluno'}
                subjectCreatorAvatar={subject.avatar}
                title={subject.title}
                SubjectDescription={subject.description}
                CommentsNumber={subject.comments.length}
                Module={subject.module}
                date={moment(subject.updated_at)}
              />
            ) : (
              <p>Carregando...</p>
            )
          }
          <Form onSubmit={HandleComment}>
            <Textarea
              name="comment" 
              label="Adicione o seu comentário" 
              value={comment}
              onChange={e => { setComment(e.target.value) }}
            />
            <div>
              <button type="submit">Comentar</button>
            </div>
          </Form>
          <Comment />
        </Wrapper>
      </Main>
    </Container>
  )
}

export default Chats;