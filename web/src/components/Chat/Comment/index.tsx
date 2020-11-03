import React, { useContext } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import manChef from '../../../assets/images/man-chef.svg';
import Avatar from '@material-ui/core/Avatar';

import { AuthContext } from '../../../contexts'

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
  const { comments } = useContext(AuthContext).data.subject;
  return (
    <Container>
      {
        comments.map(comment => (
          <>
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
                {comment.comment}
              </p>
              <CommentFooter>
                <div>
                  <AccessTimeIcon />
                  <span>{comment.commented_at}</span>
                </div>
                <div>
                  <span>{comment.likes} Likes</span>
                  <span>Responder</span>
                </div>
              </CommentFooter>
            </CommentBlock>
            
            {
              comment.responses.map(response => (
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
                    {response.commentResponse}
                  </p>
                  <ReplyFooter>
                    <span>{response.likes} Likes</span>
                    <span>
                      <AccessTimeIcon />
                      agora
                    </span>
                  </ReplyFooter>
                </Reply>
              ))
            }
          </>
        ))
      }
    </Container>
  )
}

export default Comment;