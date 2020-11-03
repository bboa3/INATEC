import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import { AuthContext } from '../../contexts';
import api from '../../services/api';


interface classParams {
  id: string;
}

const Class: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const { id } = useParams<classParams>();
  const [ pushDown, setPushDown ] = useState('push-up');
  const [ subjectsNumber, setSubjectsNumber ] = useState(2);

  const { user, uClass } = data;

  useEffect(() => {
    api.get(`/inatec/class/${id}`)
    .then(response => {
      const clas = response.data;

      setData({...data, uClass: clas})
    })
    .catch(err => {
      console.log(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    api.post('inatec/get/subjects', {
      subjectsNumber,
      classId: id,
    })
    .then(response => {
      const subjects = response.data

      setData({...data, subjects: subjects})
    }).catch (err => {
      console.log(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectsNumber]) 

  if(uClass) {
    return (
      <Container>
        <AddSubject 
          setPushDown={setPushDown}
          pushDown={pushDown}
          username={user.username}
          avatar={user.avatar}
          course={uClass.course}
          year={uClass.year}
          time={uClass.time}
        />

        <Main id={pushDown}>
          <Wrapper>
            <h1>{uClass.course}</h1>
            <ClassBlock>
              {
                data.subjects ? (
                  <Subject>
                    <SubjectHeader>
                      <img src={roadToKnowledgeImg} alt="Caminho para o conhecimento"/>
                      <div>
                        <h3> {data.subjects.length} Trabalhos e temas debatidos</h3>
                      </div>
                    </SubjectHeader>

                    {
                      data.subjects.map((subject) => {
                        let titleParts = '';
                        subject.title.split(" ").map(word => {
                          return titleParts = `${titleParts}-${word}`;
                        })

                        return (
                          <Content>
                            <Link to={`/in/chats/${titleParts}/${subject.id}`}>
                              <ContentHeader>
                                <AvatarContainer>
                                  <img src={subject.avatar} alt="Criador do tema"/>
                                </AvatarContainer>
                                <div>
                                  <div>
                                    <h3>{subject.name}</h3>
                                    <span>{subject.teacher ? 'Docente' : 'Aluno'}</span>
                                  </div>
                                  <div>{subject.module}</div>
                                </div>
                              </ContentHeader>

                              <div>
                                <h2>{subject.title}</h2>
                                <p>
                                  {subject.description}
                                </p>
                                <span>{subject.updated_at}</span>
                              </div>
                            </Link>
                          </Content>
                        )
                      })
                    }
                    <button onClick={() => { setSubjectsNumber(subjectsNumber + 3) }}>
                      Mostrar mais 3
                    </button>
                  </Subject>
                ) : (
                  <p>Carregando...</p>
                )
              }

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
  } else {
    return <p>Carregando...</p>
  }
}

export default Class;