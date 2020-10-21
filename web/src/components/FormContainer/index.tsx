import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Main, 
  ImageBlock, 
  Contacts,
  Media
} from './styles';
import studentStudding from '../../assets/images/clip-girl-study-1.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';

interface Props {
  Form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
}

const FormContainer: React.FC<Props> = ({ Form }) => {

  return (
    <Container>
      <ImageBlock>
        <img src={studentStudding} alt="Estudar"/>
      </ImageBlock>
      <Main>
        <Contacts>
          <legend>
            INATEC contactos: 
          </legend>
          <div> 
            <PinDropOutlinedIcon /> 
            <div>
              <p>Cidade da Matola.</p>
              <span>Rua Eusébio Da Silva Nº 104</span>
            </div>
          </div>
          <div> 
            <MailOutlineIcon /> 
            inatec@outlok.pt
          </div>
          <div>
            <PhoneInTalkIcon /> 
            +258 8459192 / 842158738
          </div>
          <Media>
            <Link to="" ><FacebookIcon /></Link>
          </Media>
        </Contacts>
        
        {Form}

      </Main>
    </Container>
  )
}

export default FormContainer;