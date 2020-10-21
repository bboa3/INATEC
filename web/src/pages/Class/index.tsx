import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import AddSubject from '../../components/Chat/AddSubject';
import StickyBox from 'react-sticky-box'

import TableDesktop from '../../components/Table_Desktop';
import TableMobile from '../../components/Table_Mobile';

import { Container, Main } from '../../components/AppLayout/styles';
import { 
  Subject,
  ClassInfoBlock,
  ClassBlock,
  Wrapper,
  SubjectHeader,
  Content,
  ContentHeader
} from './styles';
import roadToKnowledgeImg from '../../assets/images/undraw_road_to_knowledge_m8s0.svg';
import avatarImg from '../../assets/images/man-chef.svg'

const Class: React.FC = () => {
  const [ pushDown, setPushDown ] = useState('push-up');

  return (
    <Container>
      <AddSubject 
        setPushDown={setPushDown}
        pushDown={pushDown}
        username="arlindojos"
      />

      <Main id={pushDown}>
        <Wrapper>
          <h1>Tecnologias de informação e comunicação</h1>
          <ClassBlock>
            <Subject>
              <SubjectHeader>
                <img src={roadToKnowledgeImg} alt="Caminho para o conhecimento"/>
                <div>
                  <h3>50 Trabalhos e temas debatidos</h3>
                </div>
              </SubjectHeader>

              <Content>
                <Link to={`/chats/8`}>
                  <ContentHeader>
                    <Avatar>
                      <img src={avatarImg} alt="Criador do tema"/>
                    </Avatar>
                    <div>
                      <div>
                        <h3>José Carvalho</h3>
                        <span>Aluno</span>
                      </div>
                      <div>CCCR</div>
                    </div>
                  </ContentHeader>

                  <div>
                    <h2>Circuito de tomadas Monofasicas</h2>
                    <p>
                      Estou tentando fazer o Esquema  funcional de 6 tomadas, 
                      conheço a diferença dos 3 esquemas ...
                    </p>
                    <span>5 de Out</span>
                  </div>
                </Link>
              </Content>
              <Content>
                <Link to={`/chats/8`}>
                  <ContentHeader>
                    <Avatar>
                      <img src={avatarImg} alt="Criador do tema"/>
                    </Avatar>
                    <div>
                      <div>
                        <h3>José Carvalho</h3>
                        <span>Aluno</span>
                      </div>
                      <div>HST</div>
                    </div>
                  </ContentHeader>

                  <div>
                    <h2>Circuito de tomadas Monofasicas</h2>
                    <p>
                      Estou tentando fazer o Esquema  funcional de 6 tomadas, 
                      conheço a diferença dos 3 esquemas ...
                    </p>
                    <span>5 de Out</span>
                  </div>
                </Link>
              </Content>
              <button>Mostrar mais 5</button>
            </Subject>

            <StickyBox>
              <ClassInfoBlock>
                <TableDesktop />
                <TableMobile />
              </ClassInfoBlock>
            </StickyBox>

          </ClassBlock>
        </Wrapper>
      </Main>
    </Container>
  )
}

export default Class;