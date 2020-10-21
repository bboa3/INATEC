import React from 'react';
import { Container, Main } from './styles';
import Class from '../../components/Class';
import manChef from '../../assets/images/man-chef.svg';
import womanChef from '../../assets/images/woman-chef.svg';

const AllClass: React.FC = () => {
  return (
    <Container>

     <Main>
       <Class
        turma="Eletricidade"
        description="Turma de manhã 1º ano"
        chefName="Vicente Mateus"
        avatar={manChef}
        />
       <Class
        turma="Informática"
        description="Turma de manhã 1º ano"
        chefName="Vicente Mateus"
        avatar={manChef}
        />
       <Class
        turma="Eletricidade"
        description="Turma de tarde 3º ano"
        chefName="Vicente Mateus"
        avatar={womanChef}
        />
       <Class
        turma="Eletricidade"
        description="Turma de manhã 1º ano"
        chefName="Vicente Mateus"
        avatar={womanChef}
        />
       <Class
        turma="Eletricidade"
        description="Turma de manhã 1º ano"
        chefName="Vicente Mateus"
        avatar={womanChef}
        />
       <Class
        turma="Eletricidade"
        description="Turma de manhã 1º ano"
        chefName="Vicente Mateus"
        avatar={womanChef}
        />
     </Main>
    </Container>
  )
}

export default AllClass;