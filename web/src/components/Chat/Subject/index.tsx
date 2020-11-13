import React, { useContext} from 'react';
import { Avatar } from '@material-ui/core';
import { Container, Profile } from './styles';
import { AuthContext } from '../../../contexts';

interface Props {
  subjectCreatorName: string;
  subjectCreatorType: string;
  subjectCreatorAvatar: string;
  CommentsNumber: number;
  title: string;
  SubjectDescription: string;
  Module: string;
  date: string;
}

const Subject: React.FC<Props> = ({
  subjectCreatorName, 
  subjectCreatorType,
  subjectCreatorAvatar, 
  CommentsNumber, 
  title, 
  SubjectDescription, 
  Module, 
  date
}) => {
  const { id, toDownload } = useContext(AuthContext).data.subject;

  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={subjectCreatorAvatar} alt="Criador do tema"/>
        </Avatar>
        <div>
          <h3>{subjectCreatorName}</h3>
          <span>{subjectCreatorType}</span>
        </div>
        <span>{Module}</span>
      </Profile>
      
      <div>
        <h2>{title}</h2>
        <p>
          {SubjectDescription}
        </p>
        <div>
          <span>{date}</span>
          {
            toDownload && (
              <a href={`${process.env.REACT_APP_API_URL}/inatec/subjects/download/${id}`}>Download da ficha</a>
            )
          } 
          {
            !toDownload && (
              <strong>Sem arquivo para download</strong>
            )
          }
        </div>
      </div>

      <p>
        <span>{CommentsNumber}</span>
        Comentários
      </p>
    </Container>
  )
}

export default Subject;