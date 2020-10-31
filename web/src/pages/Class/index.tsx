import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AvatarContainer from '@material-ui/core/Avatar';
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
import { AuthContext } from '../../contexts';
import api from '../../services/api';


const Class: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const [ pushDown, setPushDown ] = useState('push-up');
  const [ subjectsNumber, setSubjectsNumber ] = useState(2);

  const { avatar, username } = data.user;
  const { id, course, year, time } = data.uClass;

  useEffect(() => {
    api.post('inatec/get/subjects', {
      subjectsNumber,
      classId: id,
    })
    .then(response => {
      const subjects = response.data

      setData({...data, subjects: subjects})
    }).catch (err => {

    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, subjectsNumber]) 

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
          <h1>{course}</h1>
          <ClassBlock>
            <Subject>
              <SubjectHeader>
                <img src={roadToKnowledgeImg} alt="Caminho para o conhecimento"/>
                <div>
                  <h3> {data.subjects.length} Trabalhos e temas debatidos</h3>
                </div>
              </SubjectHeader>

              {
                data.subjects.map((subject, index) => (
                  <Content>
                    <Link to={`/chats/8`}>
                      <ContentHeader>
                        <AvatarContainer>
                          <img src={avatarImg} alt="Criador do tema"/>
                        </AvatarContainer>
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
                ))
              }
              <button onClick={() => { setSubjectsNumber(subjectsNumber + 3) }}>
                Mostrar mais 3
              </button>
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