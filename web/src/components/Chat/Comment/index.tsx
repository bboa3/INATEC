import React, { FormEvent, useContext, useState } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Avatar from '@material-ui/core/Avatar';

import Alert from '../../Alert';

import { AuthContext } from '../../../contexts';

import { 
  Container,
  CommentBlock,
  Commenter,
  CommentFooter,
  Reply,
  Replier,
  ReplyFooter,
  LikeButton,
  ResponseButton
} from './styles';
import api from '../../../services/api';
import moment from '../../../utils/moment';

const Comment: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const { subject, user } = data;
  const { comments } = subject;
  const [ commentResponse, setCommentResponse ] = useState('')
  const [ formIndex, setFormIndex ] = useState<number>(-1)
  const [ commentIndex, setCommentIndex ] = useState<number>()
  const [ alertMessage, setAlertMessage ] = useState('');

  const [ alertStyles, setAlertStyles ] = useState({
    display: 'none', 
    background: 'var(--light-blue)'
  });

  const openForm = (formIndex: number) => {
    setFormIndex(formIndex)
  }
  
  const setCommentLike = async (commentIndex: number) => {
    const response = await api.put('/inatec/comments/like', {
      id: subject.id,
      commentIndex
    })

    const LikedSubject = response.data;
    setData({...data, subject: LikedSubject});
  }

  const HandleResponse = async (e: FormEvent) => {
    e.preventDefault();

    if(!commentResponse) {
      setAlertMessage('Por favor, escreva a sua resposta antes de submeter.')

      setAlertStyles({
        display: 'block',
        background: 'var(--error-primary)'
      })
    } else {
      setAlertStyles({
        display: 'none', 
        background: 'var(--light-blue)'
      })

      const response = await api.post('/inatec/comments/responses', {
        id: subject.id,
        userId: user.id,
        commentIndex,
        commentResponse
      })

      setCommentResponse('');
      setData({...data, subject: response.data});
    }
  }

  const setResponseLike = async (commentIndex: number, responseIndex: number) => {
    const response = await api.put('/inatec/comments/responses/like', {
      id: subject.id,
      commentIndex,
      responseIndex
    })

    const LikedSubject = response.data;
    setData({...data, subject: LikedSubject});
  }

  return (
    <>
    <Alert 
      styles={alertStyles}
      message={alertMessage}
    />      {
        comments && (
          comments.map((comment, commentIndex) => (
            <Container key={commentIndex}>
              <CommentBlock formIndex={formIndex}>
                <Commenter>
                  <Avatar>
                    <img src={`${process.env.REACT_APP_UPLOAD_Images_URL}/${comment.avatar}`} alt="Profile"/>
                  </Avatar>
                  <div>
                    <p>{comment.name}</p>
                    <span>{comment.teacher ? 'Docente' : 'Aluno'}</span>
                  </div>
                </Commenter>
                <p>
                  {comment.comment}
                </p>
                <CommentFooter formIndex={formIndex}>
                  <div>
                    <AccessTimeIcon />
                    <span>{moment(comment.commented_at)}</span>
                  </div>
                  <div>
                    <LikeButton onClick={e => { setCommentLike(commentIndex) }}>
                      {comment.likes} Likes
                    </LikeButton>
                    <ResponseButton 
                      id={`button${commentIndex}`}
                      onClick={e => {
                        openForm(commentIndex)
                      }}
                    >
                      Responder
                    </ResponseButton>
                  </div>
                </CommentFooter>

                <form
                  id={`open-form${commentIndex}`}
                  onSubmit={HandleResponse}
                >
                  <textarea
                    name="response"
                    value={commentResponse}
                    onChange={e => { setCommentResponse(e.target.value)}}
                  />
                  <ResponseButton 
                    style={{
                      position: 'absolute',
                      marginTop: '7.9rem',
                      right: '0.4rem'
                    }}
                    type='submit'
                    onClick={e => {setCommentIndex(commentIndex)}}
                  >
                    Responder
                  </ResponseButton>
                </form>

              </CommentBlock>
              
              {
                comment.responses.map((response, responseIndex) => (
                  <Reply key={responseIndex}>
                    <Replier>
                      <Avatar>
                        <img src={`${process.env.REACT_APP_UPLOAD_Images_URL}/${comment.avatar}`} alt="Profile"/>
                      </Avatar>
                      <div>
                        <p>{response.name}</p>
                        <span>{response.teacher ? 'Docente' : 'Aluno'}</span> 
                      </div>
                      </Replier>
                    <p>
                      {response.commentResponse}
                    </p>
                    <ReplyFooter>
                      <LikeButton onClick={e => { setResponseLike(commentIndex, responseIndex) }}>
                        {response.likes} Likes
                      </LikeButton>
                      <span>
                        <AccessTimeIcon />
                        {moment(response.responded_at)}
                      </span>
                    </ReplyFooter>
                  </Reply>
                ))
              }
            </Container>
          ))
        )
      }

      {
        !comments && (
          <h1>Sejá o primeiro a comentar</h1>
        )
      }
    </>
  )
}

export default Comment;