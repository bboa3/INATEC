import React from 'react'
import { Link } from 'react-router-dom';
import studentsIMG from '../../assets/images/inatec-students.jpg';
import logoIMG from '../../assets/images/Inatec_LOGO.jpg';
import studentStudding from '../../assets/images/clip-girl-study-1.svg';
import { 
  Container, 
  TopSection, 
  BottomSection,
  InatecStudents,
  Buttons,
  UnderBooks,
  Logo
 } from './styles';


const Inatec: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <h1>
          <span>
            Sejá bem vindo a INATEC online
          </span>
        </h1>

        <InatecStudents>
          <img
            src={studentsIMG} 
            alt="Alunos"
          />
        </InatecStudents>

        <Buttons>
          <div>
            <Link to='/login'>
              <button>
                Login
              </button>
            </Link>

            <Link to='sign-up'>
              Inscrição
            </Link>
          </div>
        </Buttons>
      </TopSection>

      <BottomSection>
        <div>
          <Logo>
            <img 
              src={logoIMG} 
              alt="Logo"
            />
          </Logo>

          <h1>
              Sejá bem vindo a INATEC online
          </h1>

          <UnderBooks>
            <img 
              src={studentStudding} 
              alt="Studding"
            />
          </UnderBooks>
        </div>
      </BottomSection>
    </Container>
  )
}


export default Inatec;