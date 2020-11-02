import React from 'react';
import { Avatar } from '@material-ui/core';
import { Container, Profile } from './styles';

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
          <button>Download da ficha</button>
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