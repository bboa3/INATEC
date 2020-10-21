import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import manChef from '../../../assets/images/man-chef.svg';
import Avatar from '@material-ui/core/Avatar';
import { 
  Container,
  CommentBlock,
  Commenter,
  CommentFooter,
  Reply,
  Replier,
  ReplyFooter
} from './styles';

const Comment: React.FC = () => {
  return (
    <Container>
      <CommentBlock>
        <Commenter>
          <Avatar>
            <img src={manChef} alt="Profile"/>
          </Avatar>
          <div>
            <p>Jorge Convel</p>
            <span>Docente</span> 
          </div>
        </Commenter>
        <p>
          Já tentou estudar  um pouco dos símbolos? Tenho serteza que isso pode 
          ajudar, faça isso depois me diz se conseguiu ou não
        </p>
        <CommentFooter>
          <div>
            <AccessTimeIcon />
            <span>00:20</span>
          </div>
          <div>
            <span>4 Likes</span>
            <span>Responder</span>
          </div>
        </CommentFooter>
      </CommentBlock>
      
      <Reply>
        <Replier>
          <Avatar>
            <img src={manChef} alt="Profile"/>
          </Avatar>
          <div>
            <p>Daniel</p>
            <span>Estudante</span> 
          </div>
        </Replier>
        <p>
          Também tive o mesmo problema com o Sistema Unifilar
        </p>
        <ReplyFooter>
          <span>7 Likes</span>
          <span>
            <AccessTimeIcon />
            agora
          </span>
        </ReplyFooter>
      </Reply>
    </Container>
  )
}

export default Comment;