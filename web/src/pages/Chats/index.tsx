import React, { useState, useContext } from 'react';

import Comment from '../../components/Chat/Comment';
import AddSubject from '../../components/Chat/AddSubject';
import Subject from '../../components/Chat/Subject';

import { 
  Container, 
  Main,
  Wrapper
} from '../../components/AppLayout/styles';
import { AuthContext } from '../../contexts';

const Chats: React.FC = () => {
  const { user, uClass } = useContext(AuthContext).data;
  const [ pushDown, setPushDown ] = useState('push-up');

  const { avatar, username } = user;
  const { course, year, time } = uClass;
  
  return (
    <Container>
      <AddSubject 
        setPushDown={setPushDown}
        pushDown={pushDown}
        username={username}
        avatar={avatar}
        course={course}
        year={year}
        time={time}
      />

      <Main id={pushDown}>
        <Wrapper>
          <Subject
            subjectCreatorName="Daniela Mateus"
            subjectCreatorType="Aluna"
            title="Circuito de tomadas Monofasicas"
            SubjectDescription="
              Estou tentando fazer o Esquema funcional de 6 tomadas,
              conheço a diferença dos 3 esquemas existentes, mas 
              mesmo assim tenho muita dificuldade. Alguém pode ajudar?
            "
            CommentsNumber={2}
            Module="CCR"
            date="5 de Out"
          />
          
          <Comment />
        </Wrapper>
      </Main>
    </Container>
  )
}

export default Chats;