import React from 'react';
import { Container } from './styles';

interface Props {
  styles: object;
  message: string;
}

const Alert: React.FC<Props> = ({message, styles}) => (
  <Container style={styles}>
    <div>
      <span>
        {message}
      </span>
    </div>
  </Container>
)

export default Alert;