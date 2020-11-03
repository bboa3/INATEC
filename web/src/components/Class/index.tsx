import React from 'react';
import { Avatar } from '@material-ui/core';
import { Container, ClassBlock, ChefBlock } from './styles';

interface Props {
  turma: string;
  description: string;
  chefName: string;
  avatar: string;
}

const Class: React.FC<Props> = ({turma, description, avatar, chefName}) => {
  return (
    <Container>
      <ClassBlock>
        <h3>{turma}</h3>
        <p>{description}</p>
      </ClassBlock>
      
      <ChefBlock>
        <legend>Chef. da turma</legend>
        <Avatar>
          <img src={avatar} alt="Chefe da turma"/>
        </Avatar>
        <span>{chefName}</span>
      </ChefBlock>
    </Container>
  )
}

export default Class;